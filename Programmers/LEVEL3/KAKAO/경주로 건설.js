function solution(board) {
    var answer = Infinity;
    const LEN = board.length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[0, 0, 0, -1]];
    const dp = Array.from({ length: 4 }, () =>
        Array.from({ length: LEN }, () => Array(LEN).fill(Infinity))
    );
    while (queue.length) {
        const [y, x, c, d] = queue.shift();
        for (let i = 0; i < 4; i++) {
            if (d !== -1 && Math.max(d, i) - Math.min(d, i) === 2) {
                continue;
            }
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (
                ny >= 0 &&
                ny < LEN &&
                nx >= 0 &&
                nx < LEN &&
                board[ny][nx] === 0
            ) {
                let cost = c + 100;
                if (d !== -1 && i !== d) {
                    cost += 500;
                }
                if (dp[i][ny][nx] > cost) {
                    dp[i][ny][nx] = cost;
                    if (nx === LEN - 1 && ny === LEN - 1) {
                        continue;
                    }
                    queue.push([ny, nx, cost, i]);
                }
            }
        }
    }
    // console.log('우', dp[0]);
    // console.log('하', dp[1]);
    // console.log('좌', dp[2]);
    // console.log('상', dp[3]);
    return Math.min(dp[0][LEN - 1][LEN - 1], dp[1][LEN - 1][LEN - 1]);
}

// 어차피 뒤로 다시 돌아가는 경우는 없음
// console.log(
//     solution([
//         [0, 0, 0],
//         [0, 0, 0],
//         [0, 0, 0],
//     ])
// ); // 900
// console.log(
//     solution([
//         [0, 0, 0, 0, 0, 0, 0, 1],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 1, 0, 0],
//         [0, 0, 0, 0, 1, 0, 0, 0],
//         [0, 0, 0, 1, 0, 0, 0, 1],
//         [0, 0, 1, 0, 0, 0, 1, 0],
//         [0, 1, 0, 0, 0, 1, 0, 0],
//         [1, 0, 0, 0, 0, 0, 0, 0],
//     ])
// ); // 3800
// console.log(
//     solution([
//         [0, 0, 1, 0],
//         [0, 0, 0, 0],
//         [0, 1, 0, 1],
//         [1, 0, 0, 0],
//     ])
// ); // 2100
// console.log(
//     solution([
//         [0, 0, 0, 0, 0, 0],
//         [0, 1, 1, 1, 1, 0],
//         [0, 0, 1, 0, 0, 0],
//         [1, 0, 0, 1, 0, 1],
//         [0, 1, 0, 0, 0, 1],
//         [0, 0, 0, 0, 0, 0],
//     ])
// ); // 3200
console.log(
    solution([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 0, 0],
    ])
); // 4500
