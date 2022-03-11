function solution(n, k) {
    var answer = [];
    const factorial = (num) => {
        if (num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    };
    const candidates = Array.from({ length: n }, (_, i) => i + 1);
    while (n > 0) {
        const max = factorial(n);
        const div = Math.floor(max / n); // 이게 factorial(n-1) 이랑 같네.....
        const seq = Math.ceil(k / div);
        const candidate = candidates.splice(seq - 1, 1);
        answer.push(candidate[0]);
        // 경우의 수 하나 빼기
        n--;
        k %= div;
    }
    return answer;
}

console.log(solution(3, 5)); // [3, 1, 2]
console.log(solution(3, 1)); // [1,2,3]
