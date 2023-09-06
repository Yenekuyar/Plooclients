export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timerId: NodeJS.Timeout;
  
    return (...args: Parameters<T>) => {
      if (timerId) {
        clearTimeout(timerId);
      }
  
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  