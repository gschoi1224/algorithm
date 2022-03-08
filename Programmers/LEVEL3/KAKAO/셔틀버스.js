function solution(n, t, m, timetable) {
    timetable = timetable.map((time) => {
        const date = new Date();
        const [hour, minute] = time.split(':').map(Number);
        date.setHours(hour, minute, 0);
        return date;
    });
    timetable.sort((a, b) => a - b);

    let date = new Date();
    date.setHours(9, 0, 0);
    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            date.setMinutes(date.getMinutes() + t);
        }
        if (i < n - 1) {
            timetable = timetable.filter((t, i) => i >= m || t > date);
        }
    }

    if (timetable.length >= m) {
        let cnt = 0;
        for (let i = 0; i < timetable.length; i++) {
            const time = timetable[i];
            if (cnt === m - 1 && time <= date) {
                date = time;
                date.setMinutes(time.getMinutes() - 1);
                break;
            }
            if (time <= date) {
                cnt++;
            }
        }
    }
    return `${
        date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    }:${date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`}`;
}

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03'])); // 09:00
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00'])); // 09:09
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00'])); // 08:59
console.log(solution(1, 1, 5, ['00:01', '00:01', '00:01', '00:01', '00:01'])); // 00:00
console.log(solution(1, 1, 1, ['23:59'])); // 09:00
console.log(
    solution(10, 60, 45, [
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
        '23:59',
    ])
); // 18:00
