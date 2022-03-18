function solution(sticker) {
    if (sticker.length <= 2) {
        return Math.max(...sticker);
    }
    const getDp = (dp) => {
        dp[1] = Math.max(dp[0], dp[1]);
        for (let i = 2; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
        }
        return dp;
    };
    return Math.max(
        getDp(sticker.slice(0, -1))[sticker.length - 2],
        getDp(sticker.slice(1))[sticker.length - 2]
    );
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])); // 36
console.log(solution([1, 3, 2, 5, 4])); // 8
