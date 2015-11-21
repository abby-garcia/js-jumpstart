/********* Stock Portfolio Value Instructions *********

The goal of this exercise is to write a function called 
totalPortfolioValue to calculate the total value of 
someone's stock portfolio.

Please look at the Learndot exercise page for more instructions.
*/


function totalPortfolioValue(ticker, portfolio) {
    
}

/***** Tests ********/

var total = totalPortfolioValue(['ABC', 10, 'XYZ', 200, 'BBB', 5], [['XYZ',20], ['BBB', 10]]);
console.log(total);
// should return $4050, calculated as `200 * 20 + 5 * 10`
