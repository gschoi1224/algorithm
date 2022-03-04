function solution(n, s) {
    let max = Math.floor(s / n);
    let answer = new Array(n).fill(max);
    let remain = s % n;
    if (s / n < 1) {
        return [-1];
    } else if (remain === 0) {
        return answer;
    } else {
        for (let i = 0; i < remain; i++) {
            answer[answer.length - 1 - i]++;
        }
    }
    return answer;
}

console.log(solution(2, 9)); // [4,5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4,4]
