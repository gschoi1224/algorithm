function solution(n, wires) {
  let answer = n;
  const dfs = (start, visited, graph, root) => {
    visited[start] = true;
    root.push(start);
    for (let i of graph[start]) {
      if (!visited[i]) {
        dfs(i, visited, graph, root);
      }
    }
    return root;
  };
  for (let i = 0; i < wires.length; i++) {
    const graph = new Array(n + 1).fill(false).map(_ => []);
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        const [v1, v2] = wires[j];
        graph[v1].push(v2);
        graph[v2].push(v1);
      }
    }
    const visited = new Array(n + 1).fill(false);
    const count = [];
    for (let j = 1; j <= wires.length; j++) {
      if (!visited[j]) {
        const root = dfs(j, visited, graph, []);
        count.push(root.length);
      }
    }
    if (count.length === 2) {
      answer = Math.min(answer, Math.abs(count[0] - count[1]));
    }
  }
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);

console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
