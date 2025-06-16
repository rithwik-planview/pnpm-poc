export const getUnityBasePath = () => {
    const url = new URL(window.location.href);
    const pathname = url.pathname;

    const basePath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const unityIndex = basePath.lastIndexOf('@unity');

    if (unityIndex === -1) {
        return url.origin;
    }

    const result = `${url.origin}${basePath.slice(0, unityIndex)}`;
    return result.endsWith('/') ? result.slice(0, -1) : result;
};
