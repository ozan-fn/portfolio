<script lang="ts">
  import { Upload, File as FileIcon, CheckCircle, Clock, Lock, Edit, Copy, Trash2 } from "@lucide/svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { toast } from "svelte-sonner";
  import { getFileUrl } from "$lib/storage.client";

  let selectedFile: File | null = $state(null);
  let isUploading = $state(false);
  let uploadProgress = $state(0);
  let uploadUrl = $state("");

  // Upload options
  let expiryTime = $state("24h");
  let usePassword = $state(false);
  let password = $state("");
  let customFilename = $state("");
  let isDragOver = $state(false);

  // Uploaded files history (stored in localStorage)
  let uploadedFiles = $state([]);

  // Load uploaded files from localStorage on mount
  $effect(() => {
    const stored = localStorage.getItem('uploadedFiles');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Filter out expired files
        const now = new Date();
        const filtered = parsed.filter((file: any) => new Date(file.expiresAt) > now);
        uploadedFiles = filtered;
        // Only update localStorage if files were filtered out
        if (filtered.length !== parsed.length) {
          localStorage.setItem('uploadedFiles', JSON.stringify(filtered));
        }
      } catch (e) {
        console.error('Error parsing uploaded files from localStorage:', e);
      }
    }
  });

  // Separate effect for cleanup expired files
  $effect(() => {
    const cleanupInterval = setInterval(() => {
      const stored = localStorage.getItem('uploadedFiles');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const now = new Date();
          const filtered = parsed.filter((file: any) => new Date(file.expiresAt) > now);
          if (filtered.length !== parsed.length) {
            uploadedFiles = filtered;
            localStorage.setItem('uploadedFiles', JSON.stringify(filtered));
          }
        } catch (e) {
          console.error('Error cleaning up expired files:', e);
        }
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(cleanupInterval);
  });

  function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      selectedFile = target.files[0];
      if (!customFilename) {
        customFilename = selectedFile.name;
      }
    }
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    isDragOver = true;
  }

  function handleDragLeave(event: DragEvent) {
    event.preventDefault();
    isDragOver = false;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files[0]) {
      selectedFile = files[0];
      if (!customFilename) {
        customFilename = selectedFile.name;
      }
    }
  }

  async function handleUpload() {
    if (!selectedFile) {
      toast.error("Pilih file terlebih dahulu!");
      return;
    }

    if (usePassword && !password) {
      toast.error("Masukkan password untuk proteksi file!");
      return;
    }

    isUploading = true;
    uploadProgress = 0;

    try {
      // Upload file via API endpoint to avoid CORS issues
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('filename', customFilename || selectedFile.name);
      formData.append('originalFilename', selectedFile.name);
      formData.append('fileSize', selectedFile.size.toString());
      formData.append('mimeType', selectedFile.type || 'application/octet-stream');
      formData.append('expiryTime', expiryTime);
      formData.append('password', usePassword ? password : '');
      formData.append('customFilename', customFilename || selectedFile.name);

      // Upload with progress tracking
      const uploadResponse = await fetch('/api/upload/file', {
        method: 'POST',
        body: formData,
      });

      // Simple progress simulation since we can't track FormData upload progress easily
      const progressInterval = setInterval(() => {
        uploadProgress = Math.min(uploadProgress + 10, 90);
      }, 200);

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json().catch(() => ({ message: 'Upload failed' }));
        throw new Error(errorData.message || 'Failed to upload file');
      }

      const result = await uploadResponse.json();
      clearInterval(progressInterval);
      uploadProgress = 100;

      const { uploadUrl: fileUploadUrl, fileId, expiresAt } = result;

      console.log('Upload successful:', { fileUploadUrl, fileId, expiresAt });

      // Add to local history
      const newFile = {
        id: fileId,
        filename: customFilename || selectedFile.name,
        originalFilename: selectedFile.name,
        filePath: fileUploadUrl,
        fileSize: selectedFile.size,
        mimeType: selectedFile.type || 'application/octet-stream',
        expiryTime,
        password: usePassword ? password : null,
        uploadUrl: fileUploadUrl,
        expiresAt: new Date(expiresAt),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      console.log('Adding file to history:', newFile);

      uploadedFiles = [newFile, ...uploadedFiles]; // Use assignment instead of unshift
      localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));

      // Generate shareable link using storage client URL
      const shareableUrl = getFileUrl(fileUploadUrl);
      uploadUrl = shareableUrl;

      console.log('Shareable URL:', shareableUrl);

      toast.success("File berhasil diupload!", {
        description: shareableUrl,
        action: {
          label: "Copy Link",
          onClick: () => {
            navigator.clipboard.writeText(shareableUrl);
            toast.success("Link disalin!");
          },
        },
      });

      // Reset form
      selectedFile = null;
      customFilename = "";
      password = "";
      uploadProgress = 0;

    } catch (error) {
      console.error('Upload error:', error);
      toast.error("Gagal upload file. Silakan coba lagi.");
    } finally {
      isUploading = false;
    }
  }

  function getExpiryMs(expiry: string): number {
    switch (expiry) {
      case "1h": return 3600000;
      case "24h": return 24 * 3600000;
      case "7d": return 7 * 24 * 3600000;
      case "30d": return 30 * 24 * 3600000;
      default: return 24 * 3600000;
    }
  }

  async function handleDeleteFile(fileId: string) {
    try {
      const response = await fetch(`/api/upload/${fileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete file');
      }

      // Remove from local state and storage
      uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
      localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));

      toast.success("File berhasil dihapus!");
    } catch (error) {
      console.error('Delete error:', error);
      toast.error("Gagal menghapus file!");
    }
  }

  function handleCopyFileLink(uploadUrl: string) {
    const shareableUrl = getFileUrl(uploadUrl);
    navigator.clipboard.writeText(shareableUrl);
    toast.success("Link file disalin!");
  }

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
</script>

<Card.Root class="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
  <Card.Header class="p-8 pb-4">
    <Card.Title class="text-2xl font-bold tracking-tight">File Temporary Upload</Card.Title>
    <Card.Description class="text-base">
      Upload file sementara untuk dibagikan. File akan otomatis terhapus setelah 24 jam.
    </Card.Description>
  </Card.Header>
  <Card.Content class="p-8 pt-4">
    <div class="space-y-6">
      <!-- Drag and Drop Area -->
      <div
        class="border-2 border-dashed rounded-xl p-8 text-center transition-colors {isDragOver ? 'border-primary bg-primary/5' : 'border-muted bg-muted/20'}"
        ondragover={handleDragOver}
        ondragleave={handleDragLeave}
        ondrop={handleDrop}
      >
        <Upload class="size-8 text-muted-foreground mx-auto mb-4" />
        <p class="font-medium mb-2">Drag & drop file di sini</p>
        <p class="text-sm text-muted-foreground mb-4">atau</p>
        <Input
          id="file-input"
          type="file"
          accept="*/*"
          onchange={handleFileSelect}
          disabled={isUploading}
          class="hidden"
        />
        <Button
          variant="outline"
          disabled={isUploading}
          onclick={() => document.getElementById('file-input')?.click()}
        >
          Pilih File
        </Button>
        {#if selectedFile}
          <div class="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <FileIcon class="size-4" />
            <span>{selectedFile!.name} ({(selectedFile!.size / 1024 / 1024).toFixed(2)} MB)</span>
          </div>
        {/if}
      </div>

      <!-- Options -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Expiry Time -->
        <div class="space-y-2">
          <Label class="flex items-center gap-2 text-sm font-medium">
            <Clock class="size-4" />
            Waktu Kadaluarsa
          </Label>
          <select
            bind:value={expiryTime}
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isUploading}
          >
            <option value="1h">1 Jam</option>
            <option value="24h">24 Jam</option>
            <option value="7d">7 Hari</option>
            <option value="30d">30 Hari</option>
          </select>
        </div>

        <!-- Custom Filename -->
        <div class="space-y-2">
          <Label class="flex items-center gap-2 text-sm font-medium">
            <Edit class="size-4" />
            Nama File Custom
          </Label>
          <Input
            type="text"
            placeholder="Opsional"
            bind:value={customFilename}
            disabled={isUploading}
          />
        </div>
      </div>

      <!-- Password Protection -->
      <div class="space-y-3">
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="password-check"
            bind:checked={usePassword}
            disabled={isUploading}
            class="h-4 w-4 rounded border border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <Label for="password-check" class="flex items-center gap-2 text-sm font-medium cursor-pointer">
            <Lock class="size-4" />
            Proteksi Password
          </Label>
        </div>
        {#if usePassword}
          <Input
            type="password"
            placeholder="Masukkan password"
            bind:value={password}
            disabled={isUploading}
          />
        {/if}
      </div>

      {#if isUploading}
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <div class="w-full bg-muted rounded-full h-2">
            <div
              class="bg-primary h-2 rounded-full transition-all duration-300"
              style="width: {uploadProgress}%"
            ></div>
          </div>
        </div>
      {/if}

      <Button
        onclick={handleUpload}
        disabled={!selectedFile || isUploading || (usePassword && !password)}
        class="w-full"
      >
        {#if isUploading}
          <div class="flex items-center gap-2">
            <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            Uploading...
          </div>
        {:else}
          <Upload class="size-4 mr-2" />
          Upload File
        {/if}
      </Button>

      {#if uploadUrl}
        <div class="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
          <CheckCircle class="size-4 text-green-600" />
          <div class="flex-1">
            <p class="text-sm font-medium text-green-800 dark:text-green-200">Upload berhasil!</p>
            <p class="text-xs text-green-600 dark:text-green-400 break-all">{uploadUrl}</p>
          </div>
        </div>
      {/if}

      <!-- Uploaded Files -->
      {#if uploadedFiles.length > 0}
        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">File yang Diupload</h3>
          <div class="space-y-3">
            {#each uploadedFiles as file (file.id)}
              <div class="flex items-center justify-between p-3 border rounded-lg bg-muted/20">
                <div class="flex items-center gap-3 flex-1 min-w-0">
                  <FileIcon class="size-5 text-muted-foreground shrink-0" />
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-2">
                      <p class="font-medium text-sm truncate">{file.filename}</p>
                      {#if file.password}
                        <Lock class="size-3 text-muted-foreground" />
                      {/if}
                    </div>
                    <p class="text-xs text-muted-foreground">
                      {formatFileSize(file.fileSize)} • 
                      Expires: {file.expiresAt.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <Button variant="ghost" size="sm" onclick={() => handleCopyFileLink(file.uploadUrl)}>
                    <Copy class="size-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onclick={() => handleDeleteFile(file.id)}>
                    <Trash2 class="size-4" />
                  </Button>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </Card.Content>
</Card.Root>