function solution(numbers) {
  return Array.from(new Array(10), (_, i) => i).reduce(
    (acc, cur) => (numbers.includes(cur) ? acc : acc + cur),
    0
  );
}
console.log(solution([1, 2, 3, 4, 6, 7, 8]));
