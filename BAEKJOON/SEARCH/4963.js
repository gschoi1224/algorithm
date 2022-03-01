// 섬의 개수
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const graphs = [];
let W = (H = -1);
let cnt = 0;

const directions = [
  [-1, -1],
  [-1, 0],
  [1, -1],
  [0, -1],
  [-1, 1],
  [1, 0],
  [1, 1],
  [0, 1],
];

const bfs = (y, x, graph, w, h) => {
  graph[y][x] = 0;
  queue = [[y, x]];
  while (queue.length) {
    const [ny, nx] = queue.shift();
    for (let [dy, dx] of directions) {
      const ty = ny + dy;
      const tx = nx + dx;
      if (ty < 0 || ty >= h) {
        continue;
      }
      if (tx < 0 || tx >= w) {
        continue;
      }
      if (graph[ty][tx] === 1) {
        graph[ty][tx] = 0;
        queue.push([ty, tx]);
      }
    }
  }
};

const getCount = i => {
  let count = 0;
  const graph = graphs[i];
  for (let y = 0; y < graph.length; y++) {
    for (let x = 0; x < graph[y].length; x++) {
      if (graph[y][x] === 1) {
        bfs(y, x, graph, graph[0].length, graph.length);
        count++;
      }
    }
  }
  return count;
};

rl.on("line", line => {
  if (W === -1) {
    [W, H] = line.split(" ").map(Number);
  } else if (H > 0) {
    H--;
    if (!graphs[cnt]) {
      graphs[cnt] = new Array();
    }
    graphs[cnt].push(line.split(" ").map(Number));
    if (H === 0) {
      // 초기화
      W = H = -1;
      cnt++;
    }
  }
  if (W === 0 && H === 0) {
    for (let i = 0; i < graphs.length; i++) {
      console.log(getCount(i));
    }
    rl.close();
  }
});
