// function solution(stones, k) {
//     var answer = 200000;
//     let start = 0;
//     while (start + k <= stones.length) {
//         const arr = stones.slice(start, start + k);
//         const max = Math.max(...arr);
//         answer = Math.min(answer, max);
//         let index = arr.indexOf(max);
//         if (arr.indexOf(max) === 0) {
//             index = 1;
//         }
//         start += index;
//     }
//     return answer;
// }

function solution(stones, k) {
    var answer = 0;
    let max = -Infinity;
    let min = 0;
    for (let i = 0; i < stones.length; i++) {
        max = stones[i] > max ? stones[i] : max;
    }
    while (min <= max) {
        const pivot = Math.floor((max + min) / 2);
        let isPossible = true;
        let cnt = 0;
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] < pivot) {
                cnt++;
            } else {
                cnt = 0;
            }
            if (cnt >= k) {
                isPossible = false;
                break;
            }
        }
        if (isPossible) {
            answer = pivot;
            min = pivot + 1;
        } else {
            max = pivot - 1;
        }
    }
    return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
