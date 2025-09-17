# Instructions
A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.

The password is always based on a poem and can be derived in a two-step process.

The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
The details of the process depend on which door you are trying to enter.

## Task 1: Get the First Letter of a Line

- When the guard recites a line, you must respond with the first letter of that line.
- **Declare a variable named `frontDoorLetter` that contains the first letter of a given line.**
- The variable should be set using another variable named `line`, which holds the current line of the poem.

## Task 2: Capitalize the Front Door Password

- Collect all the first letters you responded with to make a word.
- The password for the front door must be capitalized correctly: the first letter uppercase, the rest lowercase.
- **Declare a variable named `frontDoorPassword` that contains the correctly capitalized password.**
- The variable should be set using another variable named `frontDoorWord`, which holds the combined letters.

## Task 3: Get the Last Letter of a Line

- For the back door, you must respond with the last letter of the line (ignoring any whitespace at the beginning or end).
- **Declare a variable named `backDoorLetter` that contains the last letter (not whitespace) of a given line.**
- The variable should be set using another variable named `lineWithWhitespace`, which holds the current line (possibly with spaces).

## Task 4: Make a Polite Back Door Password

- For the back door password, capitalize the word like in Task 2, but also add `, please` to the end.
- **Declare a variable named `backDoorPassword` that contains the polite, capitalized version of the word.**
- The variable should be set using another variable named `backDoorWord`, which holds the combined letters.


```