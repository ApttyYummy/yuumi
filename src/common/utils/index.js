export const debounce = (fn, wait = 0) => {
    let timeout;
    return function (event) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(this, event);
        }, wait);
    }
}

export const throttle = (fn, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall <= delay) return;
        lastCall = now;
        fn(...args);
    }
}