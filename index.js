const coffeeMenu = require("./coffee_data");

// print an array of all the drinks on the menu
const drinks = [];
coffeeMenu.forEach((drink) => drinks.push(drink));
console.table(drinks);

//print an array of drinks that cost 5 and under
const fiveOrUnder = (drink) => {
    return drink.price <= 5;
}

const drinksUnderFive = coffeeMenu.filter(fiveOrUnder);
console.table(drinksUnderFive);
//print an array of drinks that are priced an even number
const onlyEven = price => {
    return price.price % 2 === 0;
}

const evenDrinks = coffeeMenu.filter(onlyEven);
console.table(evenDrinks);

//print the total if you were to order one of every drink
const totalCost = coffeeMenu.reduce(
    (total,coffeeItem) => total + coffeeItem.price,
    0
);
console.log("The total cost of the drinks is $" + totalCost);

//print an array with all the drinks that are seasonal
const seasonalDrinks = coffeeMenu.reduce(
    (accumulator,currentValue) => {
        currentValue.seasonal && accumulator.push(currentValue.name);
        return accumulator;
    }, []);
console.table(seasonalDrinks);

//Print all the seasonal drinks with 
//the words "with imported beans" after the item name.
// For example: "affogato with imported beans".

seasonalDrinks.forEach(seasonal => console.log(seasonal + " with imported beans"));