var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count)

{
    if (count <= 0)
        return "error";

    for (var j = 0; j < count; j++) {
        chocolates.unshift(color);

    }


}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let arr1 = [];
    var count = chocolates.length;
    if (count < number) {
        return "Insufficient chocolates in the dispenser";

    }
    if (number <= 0) {
        return "error";
    }
    for (var k = 0; k < number; k++) {
        arr1.push(chocolates.shift());
    }
    return arr1;



}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let arr2 = [];
    if (number <= 0)
        return "error 0";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var k = 0; k < number; k++) {
        arr2.push(chocolates.pop());
    }
    return arr2;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    let arr = [];
    var fav = 0;
    if (number > chocolates.length)
        return "no chocolates left";
    if (number <= 0)
        return "error";
    for (var i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            arr.push(chocolates.pop());
            fav++;
            if (fav == number)
                return arr;
        }
    }
    if (fav != number)
        return "no chocolates left";
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {

    let a = [];
    for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            var count = 1;
            for (var j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            a.push(count);
        }
    }
    return a;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors



// Progression 7: Change ___ chocolates of ____ color to ____ color




//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]




//Challenge 1: Remove one chocolate of ____ color from the top




//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed