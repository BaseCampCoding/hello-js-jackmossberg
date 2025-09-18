# Instructions
Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices. You are a frequent customer in her shop and realized you could make your friend's life easier. You decide to use your coding skills to help Li Mei with her job.


## Task 1: Determine How Long It Takes to Mix a Juice

- Create a variable named `juiceName` and assign it the name of a juice (as a string).
- Create a variable named `timeToMixJuiceResult`.
  - If `juiceName` is `"Pure Strawberry Joy"`, set `timeToMixJuiceResult` to `0.5`.
  - If `juiceName` is `"Energizer"` **or** `"Green Garden"`, set `timeToMixJuiceResult` to `1.5`.
  - If `juiceName` is `"Tropical Island"`, set `timeToMixJuiceResult` to `3`.
  - If `juiceName` is `"All or Nothing"`, set `timeToMixJuiceResult` to `5`.
  - For all other drinks, set `timeToMixJuiceResult` to `2.5`.


## Task 2: Replenish the Lime Wedge Supply

- Create a variable named `wedgesNeeded` for the number of lime wedges needed (as a number).
- Create a variable named `limes` for an array of lime sizes (each value is `"small"`, `"medium"`, or `"large"`).
- Create a variable named `wedgesCut` and set it to `0`.
- Create a variable named `limesCut` and set it to `0`.
- Starting from the first lime in the `limes` array, add the appropriate number of wedges to `wedgesCut`:
  - `"small"` adds `6` wedges,
  - `"medium"` adds `8` wedges,
  - `"large"` adds `10` wedges.
- After each lime is cut, increment `limesCut` by `1`.
- Keep repeating until you have cut at least `wedgesNeeded` wedges or you run out of limes.


## Task 3: Finish Up the Shift

- Create a variable named `timeLeft` for the number of minutes left in Li Mei's shift.
- Create a variable named `orders` for an array of juice names (as strings).
- For each juice in `orders`, determine how many minutes it takes to mix (using the same rules as in Task 1).
- Starting from the first order, keep track of the total time spent mixing juices.
- Li Mei can start a juice if the total time spent so far is less than `timeLeft`; she always finishes a juice she has started, even if it means working a bit overtime.
- Create a variable named `remainingOrders` which should be an array of the juices that Li Mei cannot start before her shift ends.
  - If there are no remaining orders, `remainingOrders` should be an empty array.
