//#region .svelte-kit/adapter-bun/chunks/storage.client.js
function getFileUrl(key) {
	if (!key) return "";
	if (key.startsWith("http")) return key;
	return `https://zan68.t3.tigrisfiles.io/${key.startsWith("/") ? key.substring(1) : key}`;
}
//#endregion
export { getFileUrl as t };

//# sourceMappingURL=storage.client-BxgykJF5.js.map