"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe(...fns) {
    return (...initialParams) => fns.reduce((value, fn, index) => {
        const params = index === 0 ? value : [value];
        return fn(...params);
    }, initialParams);
}
exports.pipe = pipe;
//# sourceMappingURL=index.js.map