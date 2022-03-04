function solution(n) {
    var answer = 0;

    const search = (y, x, board) => {
        board[y] = x;
        if (y === n - 1) {
            // console.log(board);
            answer++;
        } else {
            for (let i = 0; i < n; i++) {
                if (board.includes(i)) {
                    continue;
                }
                let checkI = y;
                let flag = false;
                while (checkI >= 0 && !flag) {
                    if (
                        Math.abs(y + 1 - checkI) === Math.abs(i - board[checkI])
                    ) {
                        flag = true;
                    } else {
                        checkI--;
                    }
                }
                if (flag) {
                    continue;
                }
                search(y + 1, i, [...board]);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        search(0, i, new Array(n));
    }
    return answer;
}

console.log(solution(4)); // 2
console.log(solution(10)); // 2
