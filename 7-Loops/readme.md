Instructions
You are an avid bird watcher that keeps track of how many birds have visited your garden. Usually, you use a tally in a notebook to count the birds but you want to better work with your data. You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.

|                                              Note                                              |
|------------------------------------------------------------------------------------------------|
|                  To practice, use a for loop to solve each of the tasks below.                 |
|------------------------------------------------------------------------------------------------|


## Task 1: Determine the Total Number of Birds Counted So Far

- Create a variable named `birdsPerDay` that holds an array of bird counts for each day.
- Create a variable named `total` and set it to `0`.
- Use a `for` loop to go through each value in `birdsPerDay` and add it to `total`.
- After the loop, `total` should contain the sum of all birds counted.


## Task 2: Calculate the Number of Visiting Birds in a Specific Week

- Create a variable named `week` for the week number you want to check (the first week is week 1).
- Create a variable named `daysPerWeek` and set it to `7`.
- Calculate the start and end indices for the week:
  - `weekStart` should be the index of the first day in that week: `(week - 1) * daysPerWeek`.
  - `weekEnd` should be the index after the last day in that week: `week * daysPerWeek`.
- Create a variable named `weekTotal` and set it to `0`.
- Use a `for` loop starting from `weekStart` up to (but not including) `weekEnd` and as long as you do not exceed the length of `birdsPerDay`, adding each value to `weekTotal`.


## Task 3: Fix a Counting Mistake

- Use a `for` loop to go through `birdsPerDay`, starting from the first element and increasing the index by `2` each time (`i += 2`).
- For each of these days, add `1` to the value in `birdsPerDay` at that index.
