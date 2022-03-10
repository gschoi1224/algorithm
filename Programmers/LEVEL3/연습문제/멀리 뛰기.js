function solution(n) {
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[1] = BigInt(1);
    dp[2] = BigInt(2);
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n] % BigInt(1234567);
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
console.log(solution(10)); // 3
