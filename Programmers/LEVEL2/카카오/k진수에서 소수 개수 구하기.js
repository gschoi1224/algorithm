function solution(n, k) {
    let answer = 0;
    const changed = n.toString(k);
    const arr = changed.split(/0/g).map(Number);
    arr.forEach((a) => {
        if (isPrime(a)) answer++;
    });
    return answer;
}
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
