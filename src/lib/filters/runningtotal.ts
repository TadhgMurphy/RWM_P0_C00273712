export function runningTotal(xs: number[]): number[]{
    let total = 0;

    return xs.map(x => {
        total += x;
        return total;
    })
}