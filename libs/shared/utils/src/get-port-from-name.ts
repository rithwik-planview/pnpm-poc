export const getPortFromName = (name: string, base = 3000) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = (hash * 31 + name.charCodeAt(i)) | 0;
    }
    return base + (Math.abs(hash) % 1000);
};
