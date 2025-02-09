const options = {
    flavors: ["strawberry", "chocolate", "pistachio", "mint"],
    toppings: ["nuts", "boba", "caramel", "fruit", "whipped cream"],
    blessings: ["Have a lovely day!", "It might rain today", "It's a sunny day", "Your ice cream is on the house!", "BTW you should consider using deodorant."],
};


const randomizer = () => {
    const ranNum1 = Math.floor(Math.random() * 4); // There's 4 options, so multiply by 4. 
    const ranNum2 = Math.floor(Math.random() * 5);
    const ranNum3 = Math.floor(Math.random() * 5);
    const ranFlavor = options.flavors[ranNum1];
    const ranTopping =options.toppings[ranNum2];
    const ranBlessing = options.blessings[ranNum3];
    console.log('Your ice cream flavor is: ' + ranFlavor);
    console.log('Your topping is: ' + ranTopping);
    console.log('Your blessing is: ' + ranBlessing);
    
}


randomizer();
