function solution(a, edges) {
    if (a.reduce((acc, cur) => acc + cur, 0) !== 0) {
        return -1;
    }
    let answer = BigInt(0);
    a = a.map(BigInt);
    const graph = Array.from({ length: a.length }, () => []);
    const visited = Array(a.length).fill(false);

    // console.time('graph');
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        graph[u].push(v);
        graph[v].push(u);
    }
    // console.timeEnd('graph');

    const stack = [edges[0]];

    while (stack.length) {
        const [from, to] = stack.pop();

        if (visited[to]) {
            const cost = a[to] > 0 ? a[to] : -a[to];
            if (a[to] > 0) {
                a[to] -= cost;
                a[from] += cost;
            } else {
                a[to] += cost;
                a[from] -= cost;
            }
            answer += cost;
            continue;
        }

        stack.push([from, to]);
        visited[to] = true;

        graph[to].forEach((item) => {
            if (!visited[item]) {
                stack.push([to, item]);
            }
        });
    }

    return answer;
}

console.log(
    solution(
        [-5, 0, 2, 1, 2],
        [
            [0, 1],
            [3, 4],
            [2, 3],
            [0, 3],
        ]
    )
); // 9
console.log(
    solution(
        [0, 1, 0],
        [
            [0, 1],
            [1, 2],
        ]
    )
);
