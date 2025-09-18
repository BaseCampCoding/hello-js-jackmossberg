let birdsPerDay = [
    9, 29, 11, 
    10, 2, 39, 
    23, 9, 29, 
    11, 10, 2, 
    39, 23, 9, 
    29, 11, 10, 
    2, 39, 23
];

let total = 0;

for (let i = 0; i < birdsPerDay.length - 1; i++) {
    total += birdsPerDay[i];
}

let week = 2;
let daysPerWeek = 7;

let weekStart = (week - 1) * daysPerWeek;
let weekEnd = week * daysPerWeek;

let weekTotal = 0;

for (let i = weekStart; i < weekEnd; i++) {
    weekTotal += birdsPerDay[i];
}

for (let i = 0; i < birdsPerDay.length - 1; i += 2) {
    birdsPerDay[i]++;
}

console.log(weekTotal);
console.log(total);
console.log(birdsPerDay);