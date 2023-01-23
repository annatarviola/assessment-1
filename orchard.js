///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let totalAcres = 0

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}

console.log(totalAcres)

// For this, I knew it needed to loop through the index of each array. Since they're all the same length, I drew from the first array's length. 
// As it looped through, the three indexes from each array needed to be added together, then added to the totalArray variable,
// so I carried out that process of addition.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7 

console.log(averageDailyAcres)

// There are 7 days in the week, so the average is found by dividing the number stored in totalAcres by 7. 
// That math can be stored in the new averageDailyAcres variable.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}

console.log(days)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5)
    galaTons.push(galaAcres[i] * 6.5)
    pinkTons.push(pinkAcres[i] * 6.5)
}

console.log(fujiTons, galaTons, pinkTons)

// Since it seemed like the easiest way to get the ton amount would just be to multiply 6.5 by whatever number was logged at each index,
// I built the code around that math. As the for loop looped through each index number, I had it push the multiplied number into the new arrays



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiAcres.length; i++) {

fujiPounds += fujiTons[i] * 2000
galaPounds += galaTons[i] * 2000
pinkPounds += pinkTons[i] * 2000

}

console.log(`Pounds of fuji: ${fujiPounds}, Pounds of gala: ${galaPounds}, Pounds of pink: ${pinkPounds},`)

// I got lost in the sauce for about 20 minutes trying to figure out how to sum an array 
// when I realized it would be easier to just use the += operator used within a for loop again, combining the ideas from Problems 1 & 4.
// With that, I was able to add up the conversions to pounds and assign them to the declared variables by looping through the array again.


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log(`You'll make $${fujiProfit} selling Fuji apples, $${galaProfit} selling Gala, and $${pinkProfit} selling Pink Ladies.`)

// Since the profits would be the price multiplied by the number of pounds of apples, 
// I wrote out that formula with each set of variables.



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`Your total apple-selling profit is $${totalProfit}.`)

// similar to above, writing out the math with the populated variables.