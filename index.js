const coffeeMenu = require("./coffee_data");

// print an array of all the drinks on the menu
coffeeMenu.forEach(drinks => console.log(drinks));

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

//print an array with all the drinks that are seasonal

//Print all the seasonal drinks with 
//the words "with imported beans" after the item name.
// For example: "affogato with imported beans".