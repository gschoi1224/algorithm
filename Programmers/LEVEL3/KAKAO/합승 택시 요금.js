function solution(n, s, a, b, fares) {
    let answer = Infinity;
    const graph = Array(n + 1)
        .fill(false)
        .map(() => Array(n + 1).fill(Infinity));
    fares.forEach(([a, b, cost]) => {
        graph[a][b] = cost;
        graph[b][a] = cost;
    });

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= n; k++) {
                graph[j][k] = Math.min(graph[i][j] + graph[i][k], graph[j][k]);
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        let common = 0;
        let toA = 0;
        let toB = 0;
        if (i !== s) {
            common = graph[s][i];
        }
        if (i !== a) {
            toA = graph[i][a];
        }
        if (i !== b) {
            toB = graph[i][b];
        }
        answer = Math.min(answer, common + toA + toB);
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
[
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, Infinity, 12, 13, 8, 12, 6],
    [Infinity, Infinity, 13, 14, 9, 18, 7],
    [Infinity, Infinity, 8, 9, 14, 18, 7],
    [Infinity, Infinity, 12, 18, 18, 22, 11],
    [Infinity, Infinity, 6, 7, 7, 11, 12],
];
