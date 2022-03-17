function solution(n, s, a, b, fares) {
    let answer = Infinity;
    const graph = Array(n + 1)
        .fill(false)
        .map(() => Array(n + 1).fill(0));
    fares.forEach(([a, b, cost]) => {
        graph[a][b] = cost;
        graph[b][a] = cost;
    });
    const toA = [];
    const toB = [];
    const queue = [[s, 0, [s]]];
    while (queue.length) {
        const [start, cost, root] = queue.shift();
        if (start === a) {
            toA.push([cost, root]);
        }
        if (start === b) {
            toB.push([cost, root]);
        }
        for (let to = 0; to <= n; to++) {
            if (graph[start][to] !== 0 && root.indexOf(to) === -1) {
                queue.push([to, cost + graph[start][to], [...root, to]]);
            }
        }
    }
    toA.sort((a, b) => a[0] - b[0]);
    toB.sort((a, b) => a[0] - b[0]);
    for (let ia = 0; ia < toA.length; ia++) {
        for (let ib = 0; ib < toB.length; ib++) {
            let cost = toA[ia][0] + toB[ib][0];
            for (let i = 1; i < toA[ia][1].length; i++) {
                if (toA[ia][1][i] === toB[ib][1][i]) {
                    cost -= graph[toA[ia][1][i]][toA[ia][1][i - 1]];
                }
            }
            answer = Math.min(answer, cost);
        }
    }
    return answer;
}
console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 10],
        [3, 5, 24],
        [5, 6, 2],
        [3, 1, 41],
        [5, 1, 24],
        [4, 6, 50],
        [2, 4, 66],
        [2, 3, 22],
        [1, 6, 25],
    ])
); // 82
console.log(
    solution(7, 3, 4, 1, [
        [5, 7, 9],
        [4, 6, 4],
        [3, 6, 1],
        [3, 2, 3],
        [2, 1, 6],
    ])
); // 14
console.log(
    solution(6, 4, 5, 6, [
        [2, 6, 6],
        [6, 3, 7],
        [4, 6, 7],
        [6, 5, 11],
        [2, 5, 12],
        [5, 3, 20],
        [2, 4, 8],
        [4, 3, 9],
    ])
); // 18
