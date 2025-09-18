let knightIsAwake = true;
let archerIsAwake = false;
let prisonerIsAwake = true;
let petDogIsPresent = true;

let canExecuteFastAttack = !knightIsAwake;

let canSpy = knightIsAwake || archerIsAwake || prisonerIsAwake;

let canSignalPrisoner = prisonerIsAwake && !archerIsAwake;

let canFreePrisoner = (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);