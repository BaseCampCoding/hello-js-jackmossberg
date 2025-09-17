// task 1
let hourlyRate = 60;
let dayRate = hourlyRate * 8;

// task 2
let budget = 1000;
let workdays = Math.floor(budget / dayRate);

// task 3
let totalNumberOfBillableDays = 35;
let discountedMonthlyRate = 22 * dayRate * 0.8;
let fullMonths = Math.floor(totalNumberOfBillableDays / 22);
let remainingDays = totalNumberOfBillableDays % 22;
let totalProjectCost = Math.ceil((fullMonths * discountedMonthlyRate) + (remainingDays * dayRate));