let visitorName = "Victor";
let visitorAge = 29;
let visitorTicketId = "TKT12345";
const visitor = {};
visitor.name = visitorName;
visitor.age = visitorAge;
visitor.ticketId = visitorTicketId;


visitor.ticketId = null;


const tickets = {
    "TKT12345": "Bobby",
    "TKT14325": "Elise",
    null: "Charles",
};

let ticketIdToCheck = "TKT12345";
let ticketStatusResult = "not sold";
if (ticketIdToCheck in tickets) {
    ticketStatusResult = "sold to " + tickets[ticketIdToCheck];
}


let simpleTicketStatusResult = "invalid ticket !!!";
if (ticketStatusResult != "not sold") {
    simpleTicketStatusResult = tickets[ticketIdToCheck];
}


const visitorWithGtc = {gtc: {version: "1.0.21"}};
let gtcVersion;
if (visitorWithGtc.gtc.version != undefined) {
    gtcVersion = visitorWithGtc.gtc.version;
}


console.log(simpleTicketStatusResult)
console.log(ticketStatusResult);

console.log(visitor);

console.log(gtcVersion);