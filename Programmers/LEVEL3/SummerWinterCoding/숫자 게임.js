function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    let b = 0;
    for (let a = 0; a < A.length; a++) {
        let canWin = false;
        while (!canWin && b < B.length) {
            if (B[b] > A[a]) {
                canWin = true;
                answer++;
                b++;
            } else {
                break;
            }
        }
    }
    return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
