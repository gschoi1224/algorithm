function solution(n, money) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let j = 0; j < money.length; j++) {
        const m = money[j];
        for (let i = 1; i <= n; i++) {
            if (i >= m) {
                dp[i] += dp[i - m];
            }
        }
    }
    return dp[n] % 1000000007;
}

console.log(solution(5, [1, 2, 5])); // 4
