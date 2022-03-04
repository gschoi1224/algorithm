function solution(n) {
    var answer = [];
    const move = (start, to) => {
        answer.push([start, to]);
    };
    const hanoi = (num, start, to, via) => {
        if (num === 1) {
            move(start, to);
        } else {
            hanoi(num - 1, start, via, to);
            move(start, to);
            hanoi(num - 1, via, to, start);
        }
    };
    hanoi(n, 1, 3, 2);
    return answer;
}

console.log(solution(2)); // [ [1,2], [1,3], [2,3] ]
console.log(solution(3)); // [ [1,2], [1,3], [2,3] ]
