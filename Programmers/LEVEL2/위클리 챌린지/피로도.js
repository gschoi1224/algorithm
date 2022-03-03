function solution(k, dungeons) {
  var answer = -1;
  const dfs = (start, visited, fatigue, count, before) => {
    count++;
    visited[start] = true;
    fatigue -= dungeons[start][1];
    let flag = false;
    for (let i = 0; i < dungeons.length; i++) {
      // 피로도가 남았고 방문하지 않았다면
      if (dungeons[i][0] <= fatigue && !visited[i]) {
        dfs(i, [...visited], fatigue, count, start);
        flag = true;
      }
    }
    if (!flag) {
      answer = Math.max(answer, count);
    }
  };
  for (let i = 0; i < dungeons.length; i++) {
    if (dungeons[i][0] <= k) {
      const visited = new Array(dungeons.length).fill(false);
      dfs(i, visited, k, 0);
    }
  }
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
