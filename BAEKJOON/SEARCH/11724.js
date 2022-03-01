// 연결 요소의 개수
const {stdin, stdout} = require("process");

const rl = require("readline").createInterface({
  input: stdin,
  output: stdout,
});

let N = (M = 0);
let graph;
let visited;
let cnt = 0;

const dfs = (start, visited) => {
  visited[start] = true;
  for (let i of graph[start]) {
    if (!visited[i]) {
      dfs(i, visited);
    }
  }
};

rl.on("line", line => {
  if (N === 0) {
    [N, M] = line.split(" ").map(Number);
    graph = new Array(N + 1).fill(false).map(_ => []);
    visited = new Array(N + 1).fill(false);
  } else if (M > 0) {
    M--;
    const [u, v] = line.split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
    if (M === 0) {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          dfs(i, visited);
          cnt++;
        }
      }
      console.log(cnt);
      rl.close();
    }
  }
});

// 첫번째 노드부터 시작해 dfs로 순찰돌고 연결되었다면 visited가 false로 바뀌고
// dfs 함수 실행 하고 바로 카운팅하는게 포인트