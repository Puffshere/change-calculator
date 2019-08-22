var changeCalculator = function() {
    var price =  document.getElementById("price").value;
    var cash = document.getElementById('moneyGiven').value;
    var returnValue = cash - price;
    var change = {};
   
    const moneyTypes = ['dollars', 'quarters', 'dimes', 'nickels', 'pennies'];

    const moneyValues = [1, .25, .10, .05, .01];

    var amount;


    for (var i = 0; i < moneyValues.length; i++) {

        if (i < 4) {
            amount = Math.floor(returnValue/moneyValues[i]);
        } else {
            amount = Math.ceil(returnValue/moneyValues[i]);
        }
        
        if (amount >= 0) {
            change[moneyTypes[i]] =amount;
            console.log(amount);
            returnValue = returnValue%moneyValues[i];

            document.getElementById(moneyTypes[i]).value = change[moneyTypes[i]];
        }
    }

    return change;
}


document.getElementById('calculate-button').addEventListener('click', changeCalculator);

  




 





































// Write your JavaScript here

// var $ = function (id) {
//     return document.getElementById(id);
// }
// var $ = function(id) {
//     return document.getElementById(id);
//   };
//   var $ = function(id) {
//     return document.getElementById(id);
//   };
//   var processEntry = function() {
//     var entry = $("cents").value; // get user entry
//     var cents = parseInt(entry); // parse entry
//     makeChange(cents);
//     $("cents").focus();
//   };
//   if (!isNaN(cents) || cents < 100 || cents > 0) {
//     var makeChange = function(cents) {
//       var quarters = parseInt(cents / 25); // get number of quarters
//       var dimes = parseInt(((cents - (quarters * 25)) / 10)); // get number of dimes
//       var nickels = parseInt(((cents - (quarters * 25)) - (dimes * 10)) / 5); // get number of nickels
//       var pennies = parseInt(((cents - (quarters * 25)) - (dimes * 10)) - (nickels * 5)); // get number of pennies
//       // display the results of the calculations
//       $("quarters").value = quarters;
//       $("dimes").value = dimes;
//       $("nickels").value = nickels;
//       $("pennies").value = pennies;
//     };
//   } else {
//     alert("Please enter a number between 0-99")
//   }
//   window.onload = function() {
//     $("calculate").onclick = create_change;
//     $("cents").focus();
//   };
// var create_change = function ()
//     {
//     var cents = $("cents").value;
//     if (cents > 24){
//     var quarters = Math.floor(cents/25);                                                      
//     $("quarters").value = quarters

//     }


//     if (cents > 9){
//     var dimes = Math.floor(cents/10);                                                          
//     $("dimes").value = dimes

//     }

//     if (cents > 4){
//     var nickels = Math.floor(cents/05);                                                       
//     $("nickels").value = nickels

//     }

//     if (cents > 0) {
//     var pennies = Math.floor(cents/01);
//     $("pennies").value = pennies

//     }

//     }

// window.onload = function () {
//     $("calculate").onclick = create_change;
// }
