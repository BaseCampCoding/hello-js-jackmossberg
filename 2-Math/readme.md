# Freelancer Pricing Utility — Variable Practice (No Functions)

In this exercise, you will help a freelancer quickly answer client questions about project pricing. You will practice using variables and arithmetic expressions in JavaScript.
## Task 1: Calculate the Day Rate

A client wants to know the freelancer's daily rate. The freelancer works `8 hours` each day but only knows their hourly rate which is $60 per hour.

- **Declare a variable named `ratePerHour`.**
- **Declare a variable named `dayRate`.**
- Set the `day rate` to the `rate per hour` multiplied by the hours the freelancer works.

## Task 2: Calculate the Number of Workdays for a Budget

A project manager offers a fixed budget which is a $1000. How many full days can the freelancer work for that budget?

- **Declare a variable named`budget` that stores the fixed budget.**
- **Declare a variable named `workdays`.**
- workdays sshould calculate the number of full (whole) days the `budget` will cover, using the `day rate`.
- The `number of workdays` should be **rounded down** to the nearest whole number.

## Task 3: Calculate the Discounted Rate for Large Projects

For projects spanning multiple months, the freelancer gives a discount 20% for every full month (22 billable days per month). Extra days are billed at the normal day rate.

- **Declare a variable named `billable`.**
- **Declare a variable named `monthlyDiscount` (as a decimal, e.g., 0.1 for 10%).**
- Calculate how many full months and how many extra days are in the project that is 35 days and store in a variable named 'fullMonths' and 'remainingDays' respectively.
- Calculate the cost for the `discounted months` in a variable named discountedMonthlyRate which is the rate for the month minus the discount.
-Calculate the cost for the remaining days in a variabled called 'remainingCost'
- Add them for the total project cost in a variable called 'totalProjectCost'.
- The `total cost` should be **rounded up** to the nearest whole number.


```
