export function pipe(...fns) {
    return (...initialParams) => fns.reduce((value, fn, index) => {
        const params = index === 0 ? value : [value];
        return fn(...params);
    }, initialParams);
}
