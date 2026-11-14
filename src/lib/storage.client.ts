const BASE_URL = 'https://zan68.t3.tigrisfiles.io';

/** Turn a storage key into a public URL for public assets (thumbnails, avatars). */
export function getFileUrl(key: string | null | undefined) {
    if (!key) return '';
    if (/^https?:\/\//.test(key)) return key;

    return `${BASE_URL}/${key.replace(/^\/+/, '')}`;
}
