let line = "Stands so high"

let frontDoorLetter = line[0];

let frontDoorWord = "SHIRE"
let frontDoorPassword = frontDoorWord[0].toUpperCase() + frontDoorWord.slice(1, 5).toLowerCase()

lineWithWhitespace = "Reins and harness"
let removeWhitespace = lineWithWhitespace.trim()
let backDoorLetter = removeWhitespace[removeWhitespace.length - 1]
let backDoorWord = "Horse"
backDoorPassword = backDoorWord + ", please"

console.log(frontDoorPassword)