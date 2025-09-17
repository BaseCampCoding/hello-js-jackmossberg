let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

let canExecuteFastAttack = false;
if (!knightIsAwake) {
    canExecuteFastAttack = true;
}

let canSpy = false;
if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    canSpy = true;
}

let canSignalPrisoner = false;
if (prisonerIsAwake && !archerIsAwake) {
    canSignalPrisoner = true;
}

let canFreePrisoner = false;
if (!archerIsAwake && petDogIsPresent || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake) {
    canFreePrisoner = true;
}