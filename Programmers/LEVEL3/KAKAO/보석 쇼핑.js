function solution(gems) {
    var answer = [0, gems.length];
    const kind = new Set(gems).size;
    const map = new Map();

    for (let i = 0; i < gems.length; i++) {
        map.set(gems[i], i);
        if (map.size === kind) {
            let min = gems.length;
            let max = 0;
            let del = '';
            for (let gem of map.keys()) {
                const val = map.get(gem);
                if (min > val) {
                    min = val;
                    del = gem;
                }
                if (max < val) {
                    max = val;
                }
            }
            if (answer[1] - answer[0] > max - min) {
                answer = [min + 1, max + 1];
            }
            map.delete(del);
        }
    }
    return answer;
}

console.log(
    solution([
        'DIA',
        'RUBY',
        'RUBY',
        'DIA',
        'DIA',
        'EMERALD',
        'SAPPHIRE',
        'DIA',
    ])
); //[3, 7]
console.log(solution(['AA', 'AB', 'AC', 'AA', 'AC'])); // [1, 3]
console.log(solution(['XYZ', 'XYZ', 'XYZ'])); //[1, 1]
console.log(solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB'])); //[1, 5]
