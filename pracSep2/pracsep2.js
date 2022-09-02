//given a number of cents, return an object with the count
//of how many of each coin should be returned
// 67 -> 2 quarters, 1 dime, 1 nickel, 2 pennies
// 78 -> 3 quarters, 0 dimes, 0 nickels, 3 pennies
function coinChange(cents){
    let quarter = 0;
    let dime = 0 ;
    let nickel = 0;
    let penny = 0;
    let change = cents;

    while ( change >= 25) {
        change -= 25;
        quarter++;
    }
    while ( change >= 10) {
        change -= 10;
        dime++;
    }
    while ( change >= 10) {
        change -= 10;
        dime++;
    }
    while ( change >= 5) {
        change -= 5;
        nickel++;
    }
    while ( change >= 1) {
        change -= 1;
        penny++;
    }
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)
};
coinChange(67);
coinChange(78);