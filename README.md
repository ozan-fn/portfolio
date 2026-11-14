# Portfolio

Personal portfolio + dashboard admin. SvelteKit 2 (Svelte 5 runes), Prisma 7 + PostgreSQL, Better Auth, Tigris (S3-compatible) untuk file.

## Fitur

- Halaman publik: home (statistik WakaTime), projects, blog, certificates, tools, game, contact, CV (PDF)
- Dashboard admin (login): CRUD projects, certificates, blog, categories, settings
- Tools: URL shortener, text share (collaborative editor via MQTT), temporary file upload
- File upload langsung ke Tigris lewat presigned URL (byte file tidak lewat app)

## Setup

```sh
pnpm install
cp .env.example .env   # lalu isi semua variabel
pnpm prisma generate
pnpm prisma db push    # atau prisma migrate deploy kalau pakai migrasi
pnpm dev
```

> Supabase: `DATABASE_URL` pakai port `6543` (transaction pooler) untuk aplikasi, sedangkan `DIRECT_URL` pakai port `5432` (session pooler) untuk perintah Prisma CLI. Prisma CLI tidak bisa DDL lewat transaction pooler.

## Environment

| Variabel | Wajib | Keterangan |
|---|---|---|
| `DATABASE_URL` | ya | Connection string PostgreSQL (Supabase pooler, port `6543`) |
| `DIRECT_URL` | untuk CLI | Sama seperti `DATABASE_URL` tapi port `5432` (session pooler). Dipakai `prisma db push` / `migrate`; tanpa ini CLI menggantung dengan error `prepared statement "s1" already exists` |
| `BETTER_AUTH_URL` | ya | URL publik aplikasi |
| `BETTER_AUTH_SECRET` | ya | Secret untuk session; juga dipakai menandatangani token hapus file |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | ya | Kredensial Tigris |
| `AWS_ENDPOINT_URL` | ya | Endpoint S3-compatible, mis. `https://t3.storage.dev` |
| `AWS_BUCKET_NAME` | ya | Nama bucket |
| `AWS_REGION` | ya | `auto` untuk Tigris |
| `WAKATIME_API_KEY` | tidak | Statistik coding di halaman home |

## Temporary file

- Upload: browser → Tigris langsung dengan presigned PUT (`POST /api/upload/generate-url`).
- Nama file di storage mengikuti nama yang diupload + 8 karakter hash, mis. `tmp/laporan-q3-ab12cd34.pdf` — bukan nama acak.
- Hash SHA-256 dihitung **di browser** sebelum meminta presigned URL. Kalau file identik masih ada dan belum expired: tidak ada upload ulang, dapat URL baru, masa berlaku baru, dan nama file diberi angka sebelum extension supaya tidak kembar di daftar. Panjang angkanya ikut jumlah duplikat: 1 digit (1–9) sampai 9 duplikat, 2 digit (10–99) mulai 10 duplikat, 3 digit (100–999) mulai 100 duplikat — mis. `laporan-q3-1.pdf` → `laporan-q3-42.pdf` → `laporan-q3-421.pdf`.
- Tautan yang dibagikan (`shareUrl` dari `generate-url`) adalah **URL Tigris langsung** untuk file tanpa password. File ber-password memakai `/api/files/<slug>` dan di-stream lewat app supaya proteksinya tidak bisa dilewati.
- `/api/files/<slug>` tetap tersedia untuk kompatibilitas: 302 ke Tigris, dengan cek `expiresAt` di sisi app. Untuk tautan Tigris langsung, masa berlaku hanya dijaga cronjob.
- Hapus: `DELETE /api/upload/<fileId>` (butuh login atau header `x-upload-token`).
- Expired file dibersihkan oleh cronjob (lihat bawah). Cek `expiresAt` di route akses tetap ada sebagai pengaman.

> Kolom baru `fileHash` di `temporary_files`: jalankan `pnpm prisma db push` (atau migrasi) setelah update.

## AI (pengisian konten otomatis)

Dashboard → **AI Settings** (`/dashboard/ai`). Isi:

| Field | Contoh | Catatan |
|---|---|---|
| Base URL | `https://api.openai.com/v1` | Endpoint OpenAI-compatible; `/chat/completions` ditambahkan otomatis |
| Model | `gpt-4o-mini` | Nama model apa pun yang didukung endpoint tersebut |
| API Key | `sk-...` | Disimpan di tabel `ai_settings`, tidak pernah dikirim balik ke browser. Kosongkan saat edit untuk mempertahankan key lama |

Dipakai di form **Dashboard → Blog → New Post**: isi brief singkat, klik **Generate**, hasilnya mengisi editor konten (menimpa isi yang ada). Judul dan tags ikut dikirim sebagai konteks.

Prompt sistem **hardcoded** di `src/lib/ai.ts` (`AI_SYSTEM_PROMPT`) supaya hasil konsisten — bukan setting yang bisa diubah dari UI.

Endpoint yang dipanggil frontend: `POST /api/ai/generate` (wajib login), body `{ "prompt": "..." }`, balasan `{ "text": "..." }`.

> Tabel `ai_settings` baru: jalankan `pnpm prisma db push` (atau migrasi) setelah update.

## Cronjob pembersihan file expired

Endpoint: `GET` atau `POST /api/cron/cleanup` (tanpa auth, dibatasi **30 request/jam per IP**, `429` + `Retry-After` kalau lewat).

Satu kali jalan: menghapus maksimal 200 file expired (objek Tigris dulu, baru record DB). Kalau storage gagal dihapus, record dibiarkan untuk run berikutnya.

Kalau beberapa record memakai objek yang sama (hasil dedupe hash), objek hanya dihapus ketika **tidak ada lagi record yang belum expired** yang memakainya; record expired tetap dibersihkan. Response:

```json
{ "success": true, "checked": 12, "deleted": 12, "failed": 0, "hasMore": false }
```

Panggil tiap 10 menit. Contoh dengan `crontab` di server:

```cron
*/10 * * * * curl -fsS -X POST https://domain-kamu/api/cron/cleanup > /dev/null
```

Atau layanan cron eksternal (cron-job.org, GitHub Actions schedule) yang menembak URL yang sama.

**Penting untuk cron-job.org / layanan sejenis:** pakai method **GET**, atau POST dengan header `Content-Type: application/json`. POST dengan content-type form tanpa `Origin` ditolak SvelteKit dengan `403 Cross-site POST form submissions are forbidden` — itu proteksi CSRF, bukan error endpoint. Kalau kena rate limit, balasannya `429` + `Retry-After`.

Catatan:

- Rate limit disimpan di memori proses. Kalau app dijalankan lebih dari satu instance, tiap instance menghitung sendiri — pindah ke Redis/Upstash sebelum scale out.
- `hasMore: true` berarti masih ada sisa; run berikutnya melanjutkan.
- Cron service gratis biasanya memakai IP yang sama untuk semua job, jadi kalau limitnya dinaikkan sesuaikan intervalnya.

## Script

| Perintah | Fungsi |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` / `pnpm preview` | Build & preview produksi |
| `pnpm check` | Typecheck Svelte + TS |
| `pnpm test` | Unit test — offline, tidak menyentuh DB/Tigris |
| `pnpm test:integration` | Integration test — baca `.env`, **read-only** (hanya SELECT + HEAD) |

### Integration test

Letaknya terpisah dari unit test: `tests/integration/`, config `vitest.integration.config.ts`.

- `database.test.ts` — koneksi DB, semua tabel fitur bisa dibaca, tabel `ai_settings` & kolom `file_hash` ada, query cron & dedupe berjalan, view text share tidak bertambah saat dibaca.
- `storage.test.ts` — `headObject` untuk objek yang ada dan yang tidak ada, plus URL publik bucket benar-benar 200.
- `files-route.test.ts` — `/api/files/[...uploadUrl]`: 302 ke Tigris untuk file aktif, 404 untuk key tak dikenal, 410 untuk record expired, 401 + form password untuk file terproteksi.

Tidak ada operasi tulis: tidak ada `create`/`update`/`delete`, tidak ada PUT/DELETE ke Tigris.
