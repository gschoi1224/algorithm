function solution(n, works) {
    works.sort((a, b) => b - a);
    const getMaxIndex = () => {
        for (let i = 0; i < works.length; i++) {
            if (i < works.length - 1 && works[i + 1] < works[i]) {
                return i;
            }
        }
        return works.length - 1;
    };
    while (n > 0) {
        n--;
        works[getMaxIndex()]--;
    }
    return works.reduce((acc, cur) => (cur > 0 ? acc + cur ** 2 : acc), 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
console.log(solution(3, [5])); // 4
console.log(solution(5, [4, 4, 4])); // 17
console.log(solution(15, [4, 4, 4])); // 0
console.log(solution(9, [1, 1, 1])); // 0
console.log(solution(2, [1, 1, 1])); // 1
