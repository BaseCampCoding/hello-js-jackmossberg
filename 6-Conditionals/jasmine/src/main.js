let kind = "car";
let needsLicenseResult = false;
if (kind == "car" || kind == "truck") needsLicenseResult = true

let option1 = "Volvo";
let option2 = "Ford";
let options = [option1, option2].sort()
let chooseVehicleResult = options[0] + " is clearly the better choice."

let originalPrice = 11550.0
let age = 2.0
let calculateResellPriceResult = null;

if (age < 3.0) {
    calculateResellPriceResult = originalPrice * 0.8;
} else if (age > 10.0) {
    calculateResellPriceResult = originalPrice * 0.5;
} else {
    calculateResellPriceResult = originalPrice * 0.7;
}