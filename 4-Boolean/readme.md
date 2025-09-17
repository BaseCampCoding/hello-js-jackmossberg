# Instructions

In this exercise, you’ll use boolean variables to help determine which actions Annalyn can take in her quest to rescue her best friend.  


There are four important state variables in this scenario (declare each as a boolean):
- `knightIsAwake`: `true` if the knight is awake, otherwise `false`
- `archerIsAwake`: `true` if the archer is awake, otherwise `false`
- `prisonerIsAwake`: `true` if the prisoner is awake, otherwise `false`
- `petDogIsPresent`: `true` if Annalyn's dog is with her, otherwise `false`

## Given the following state:
  knightIsAwake = true;
  archerIsAwake = false;
  prisonerIsAwake = true;
  petDogIsPresent = true;

## Task 1: Fast Attack Availability

- **Declare a variable named `canExecuteFastAttack`.**
- Set it to `true` if a fast attack can be made, otherwise `false`.
- A fast attack can be made if the knight is sleeping.

## Task 2: Spy Availability

- **Declare a variable named `canSpy`.**
- Set it to `true` if spying on the camp is possible, otherwise `false`.
- Spying is possible if *any* of the knight, archer, or prisoner is awake.

## Task 3: Signal Prisoner Availability

- **Declare a variable named `canSignalPrisoner`.**
- Set it to `true` if Annalyn can signal the prisoner, otherwise `false`.
- You can signal the prisoner if the prisoner is awake and the archer is sleeping.

## Task 4: Free Prisoner Availability

- **Declare a variable named `canFreePrisoner`.**
- Set it to `true` if Annalyn can attempt to free the prisoner, otherwise `false`.
- Annalyn can free the prisoner if:
  - She has her dog **and** the archer is sleeping, **or**
  - She does **not** have her dog, the prisoner is awake, and both the knight and archer are sleeping.
