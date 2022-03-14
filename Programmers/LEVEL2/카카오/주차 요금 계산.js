function solution(fees, records) {
    var answer = [];
    const times = {};
    records.forEach((record) => {
        const [time, id, type] = record.split(' ');
        if (type === 'IN') {
            if (times[id]) {
                times[id] = {
                    in: time,
                    out: '23:59',
                    total:
                        getMinutes(times[id].in, times[id].out) +
                        times[id].total,
                };
            } else {
                times[id] = { in: time, out: '23:59', total: 0 };
            }
        } else if (type === 'OUT') {
            times[id].out = time;
        }
    });
    for (let id in times) {
        const inTime = times[id].in;
        const outTime = times[id].out;
        const time = getMinutes(inTime, outTime) + times[id].total;
        if (time <= fees[0]) {
            answer.push([id, Number(fees[1])]);
        } else {
            const over = time - Number(fees[0]);
            let fee = Number(fees[1]);
            fee += Math.ceil(over / Number(fees[2])) * Number(fees[3]);
            answer.push([id, fee]);
        }
    }
    answer.sort((a, b) => a[0] - b[0]);
    return answer.map((a) => a[1]);
}

function getMinutes(inTime, outTime) {
    const [inHH, inMM] = inTime.split(':').map(Number);
    let [outHH, outMM] = outTime.split(':').map(Number);
    let total = 0;
    if (inMM > outMM) {
        outHH--;
        outMM += 60;
    }
    total = outMM - inMM;
    total += (outHH - inHH) * 60;
    return total;
}
