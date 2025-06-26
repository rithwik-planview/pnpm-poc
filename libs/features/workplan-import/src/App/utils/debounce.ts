export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>): void => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

export default debounce;
