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

let timeLeft = 5;
let orders = ["Tropical Island", "All or Nothing", "All or Nothing", "Green Garden"];

let remainingOrders = [];

let lastOrder;
let time = 0;
for (let i = 0; i < orders.length - 1 && time < timeLeft; i++) {
    if (juiceName == "Pure Strawberry Joy") {
        time += 0.5;
    } else if (juiceName == "Energizer" || juiceName == "Green Garden" ) {
        time += 1.5;
    } else if (juiceName == "All or Nothing") {
        time += 5.0;
    } else if (juiceName == "Tropical Island") {
        time += 3.0;
    } else {
        time += 2.5;
    }

    lastOrder++;
}

remainingOrders = orders.slice(lastOrder, orders.length - 1)

console.log(limesCut);
console.log(wedgesCut);

console.log(remainingOrders);