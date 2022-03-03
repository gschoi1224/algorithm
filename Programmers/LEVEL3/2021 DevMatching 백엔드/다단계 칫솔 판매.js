function solution(enroll, referral, seller, amount) {
    const answer = new Array(enroll.length).fill(0);
    const setIncome = (slaveIndex, income) => {
        if (income > 0) {
            const mine = Math.ceil(income * 0.9);
            answer[slaveIndex] += mine;
            if (referral[slaveIndex] !== '-' && income - mine > 0) {
                setIncome(enroll.indexOf(referral[slaveIndex]), income - mine);
            }
        }
    };
    for (let i = 0; i < seller.length; i++) {
        setIncome(enroll.indexOf(seller[i]), amount[i] * 100);
    }
    return answer;
}

console.log(
    solution(
        ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
        ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
        ['young', 'john', 'tod', 'emily', 'mary', 'mary'],
        [12, 4, 2, 5, 5, 5]
    )
); // [360, 958, 108, 0, 450, 18, 180, 1080]
console.log(
    solution(
        ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
        ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
        ['sam', 'emily', 'jaimie', 'edward'],
        [2, 3, 5, 4]
    )
); // [0, 110, 378, 180, 270, 450, 0, 0]
