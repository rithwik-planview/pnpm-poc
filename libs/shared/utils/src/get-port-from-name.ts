export const getPortFromName = (name: string, base = 3000) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = (hash << 5) - hash + name.charCodeAt(i);
        hash |= 0;
    }
    return base + (Math.abs(hash) % 1000);
};
