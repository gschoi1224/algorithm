// DFS와 BFS
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = (M = V = 0);
let graph;
let cnt = 0;
let answerDfs = "";
let answerBfs = "";

const dfs = (node, visited) => {
  visited[node] = true;
  answerDfs += node + " ";
  for (let i of graph[node]) {
    if (!visited[i]) {
      dfs(i, visited);
    }
  }
};

const bfs = (start, visited) => {
  queue = [start];
  visited[start] = true;
  while (queue.length > 0) {
    node = queue.shift();
    answerBfs += node + " ";
    for (let i of graph[node]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
};

rl.on("line", line => {
  if (N === 0) {
    [N, M, V] = line.split(" ").map(Number);
    graph = new Array(N + 1).fill(0).map(_ => []);
  } else if (cnt < M) {
    const [a, b] = line.split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
    graph[a].sort((a, b) => a - b);
    graph[b].sort((a, b) => a - b);
    cnt++;
    if (cnt >= M) {
      dfs(V, new Array(N + 1).fill(false));
      bfs(V, new Array(N + 1).fill(false));
      console.log(answerDfs);
      console.log(answerBfs);
      rl.close();
    }
  }
});
