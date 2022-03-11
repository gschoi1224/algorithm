function solution(s) {
    var answer = 1;
    let pivot = (s.length - 1) / 2;
    const visited = {};
    const check = (pivot) => {
        let flag = true;
        let start = pivot - (pivot % 1);
        let end = pivot + (pivot % 1);
        visited[pivot] = true;
        let len = 0;
        if (start === end) {
            len = 1;
            start--;
            end++;
        }
        while (start >= 0 && end < s.length) {
            if (s[start] !== s[end]) {
                flag = false;
                break;
            }
            len += 2;
            start--;
            end++;
        }
        answer = Math.max(answer, len);
        if (answer < (pivot - 0.5) * 2 && !visited[pivot - 0.5]) {
            check(pivot - 0.5);
        }
        if (
            answer < (s.length - 1 - pivot + 0.5) * 2 &&
            !visited[pivot + 0.5]
        ) {
            check(pivot + 0.5);
        }
    };
    check(pivot);
    return answer;
}

console.log(solution('abcdcba')); // 7
console.log(solution('abacde')); // 3
