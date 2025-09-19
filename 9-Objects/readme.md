# High Score Board

You are keeping track of high scores for an arcade game.  

## Task 1: Create a New High Score Board
- Create an object named `scoreBoard`.
- The object should have one entry: the key should be `"The Best Ever"` (including spaces and capitalization), and the value should be `1000000`.

## Task 2: Add Players to the Score Board
- Create a variable named `newPlayerName` for the player's name (as a string).
- Create a variable named `newPlayerScore` for the player's score (as a number).
- Add a new entry to the `scoreBoard` object with the key `newPlayerName` and the value `newPlayerScore`.

## Task 3: Remove Players from the Score Board
- Create a variable named `playerToRemove` containing the name of the player to remove (as a string).
- Use `delete` to remove this entry from the `scoreBoard` object.

## Task 4: Increase a Player's Score
- Create a variable named `playerNameToUpdate` containing the name of the player whose score you want to increase.
- Create a variable named `scoreToAdd` with the number of points to add.
- Increase the value in the `scoreBoard` for `playerNameToUpdate` by `scoreToAdd`.

## Task 5: Apply Monday Bonus Points
- Create a variable named `mondayBonus` and set it to `100`.
- Use a `for...in` loop to add `mondayBonus` to each player's score in the `scoreBoard` object.


```