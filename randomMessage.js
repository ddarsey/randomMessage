const flavors = ["strawberry", "chocolate", "pistachio", "mint"];
const toppings = ["nuts", "boba", "caramel", "fruit", "whipped cream"];
const blessings = ["Have a lovely day!", "It might rain today", "It's a sunny day", "Your ice cream is on the house!", "BTW you should consider using deodorant."];

const randomizer = () => {
    ranNum1 = Math.floor(Math.random() * 4); // There's 4 options, so multiply by 4. 
    ranNum2 = Math.floor(Math.random() * 5);
    ranNum3 = Math.floor(Math.random() * 5);
    ranFlavor = flavors[ranNum1];
    ranTopping = toppings[ranNum2];
    ranBlessing = blessings[ranNum3];
    console.log('Your ice cream flavor is: ' + ranFlavor);
    console.log('Your topping is: ' + ranTopping);
    console.log('Your blessing is: ' + ranBlessing);
    
}

// console.log("Hellurrrrr");

randomizer();