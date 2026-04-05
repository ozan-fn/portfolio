export function getFileUrl(key: string | null | undefined) {
    if (!key) return '';
    if (key.startsWith('http')) return key;

    // Hardcode aja Base URL Tigris kamu di sini
    // Daripada ribet nambah env, langsung tulis aja pattern-nya
    const baseUrl = `https://zan68.t3.tigrisfiles.io`;

    const cleanKey = key.startsWith('/') ? key.substring(1) : key;
    return `${baseUrl}/${cleanKey}`;
}
