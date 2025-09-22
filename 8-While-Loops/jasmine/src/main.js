let juiceName = "apple juice"
let timeToMixJuiceResult;

if (juiceName == "Pure Strawberry Joy") {
    timeToMixJuiceResult = 0.5;
} else if (juiceName == "Energizer" || juiceName == "Green Garden" ) {
    timeToMixJuiceResult = 1.5;
} else if (juiceName == "All or Nothing") {
    timeToMixJuiceResult = 5.0;
} else if (juiceName == "Tropical Island") {
    timeToMixJuiceResult = 3.0;
} else {
    timeToMixJuiceResult = 2.5;
}

let wedgesNeeded = 2;
let limes = ["small", "medium", "large"];

let limesCut = 0;
let wedgesCut = 0;
for (let i = 0; i < limes.length - 1 && i < wedgesNeeded; i++) {
    if (limes[i] == "small") {
        wedgesCut += 6;
    } else if (limes[i] == "medium") {
        wedgesCut += 8;
    } else if (limes[i] == "large") {
        wedgesCut += 10;
    }

    limesCut++;
}

let timeLeft = 7;
let totalTime = 0;
let orderIndex = 0;
let orders = ["Energizer", "Tropical Island", "All or Nothing"];

while (totalTime < timeLeft && orderIndex < orders.length) {
    if (orders[orderIndex] == "Pure Strawberry Joy") {
        totalTime += 0.5;
    } else if (orders[orderIndex] == "Energizer" || orders[orderIndex] == "Green Garden") {
        totalTime += 1.5;
    } else if (orders[orderIndex] == "Tropical Island") {
        totalTime += 3.0;
    } else if (orders[orderIndex] == "All or Nothing") {
        totalTime += 5.0;
    } else {
        totalTime += 2.5;
    }

    orderIndex += 1;
}

let remainingOrders = [];
if (orderIndex < orders.length) {
    for (let t = orderIndex; t < orders.length; t++) {
        remainingOrders.push(orders[t]);
    }
}