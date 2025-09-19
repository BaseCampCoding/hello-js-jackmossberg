# Instructions
It is your job to provide and maintain parts of the IT system of an amusement park. In particular, you are responsible for the program that manages visitors and tickets.

First, you will create a new visitor in the system. Then you will provide a function for revoking a ticket. In tasks 3 and 4, you will work on the ticket tracking system that helps to prevent forgery. Lastly, you will help adapt the system to new legal requirements.

## Task 1: Create a New Visitor

- Create a variable named `visitorName` for the name of the visitor.
- Create a variable named `visitorAge` for the age of the visitor.
- Create a variable named `visitorTicketId` for the ticket identifier.
- Create an object named `visitor` with the keys `name`, `age`, and `ticketId`, using the above values.


## Task 2: Revoke the Ticket

- Set the `ticketId` property of the `visitor` object to `null`.


## Task 3: Determine the Ticket Status

- Create an object named `tickets` that maps ticket identifiers to either `null` (for not sold) or the name of the visitor (for sold tickets).
- Create a variable named `ticketIdToCheck` for the ticket identifier you want to check.
- Create a variable named `ticketStatusResult`.
  - If `ticketIdToCheck` is NOT a key in the `tickets` object, set `ticketStatusResult` to `'unknown ticket id'`.
  - If its value is `null`, set `ticketStatusResult` to `'not sold'`.
  - If its value is a name, set `ticketStatusResult` to `'sold to {name}'`, where `{name}` is the value.


## Task 4: Improve the Ticket Status Response

- Create a variable named `simpleTicketStatusResult`.
  - If the ticket was sold (i.e., the value in `tickets` for `ticketIdToCheck` is a non-empty string), set `simpleTicketStatusResult` to the visitor's name.
  - Otherwise, set `simpleTicketStatusResult` to `'invalid ticket !!!'`.


## Task 5: Determine the Version of Terms and Conditions

- Create an object named `visitorWithGtc` that includes a nested object `gtc` with a `version` property.
- Create a variable named `gtcVersion`.
  - If the `visitorWithGtc` object has a `gtc` property with a `version`, set `gtcVersion` to that version.
  - If not, `gtcVersion` should remain undefined.
