function solution(a) {
    var answer = 2;
    const leftDp = new Array(a.length);
    const rightDp = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            leftDp[i] = a[i];
        } else {
            leftDp[i] = Math.min(leftDp[i - 1], a[i]);
        }
    }
    for (let i = a.length - 1; i >= 0; i--) {
        if (i === a.length - 1) {
            rightDp[i] = a[i];
        } else {
            rightDp[i] = Math.min(rightDp[i + 1], a[i]);
        }
    }
    for (let i = 1; i < a.length - 1; i++) {
        if (Math.max(leftDp[i - 1], rightDp[i + 1]) > a[i]) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([9, -1, -5])); // 3
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); // 6
console.log(solution([2, 5, 1, 4, 3])); //
