export const closestValue = (values, goal) =>
    values.reduce(function (prev, curr) {
        return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
    });

export const range = (start, stop, step, decimals = 2) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
        parseFloat((start + i * step).toFixed(decimals))
    );
