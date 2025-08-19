export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay = 100) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...(args as unknown as Parameters<T>)), delay);
  };
}
