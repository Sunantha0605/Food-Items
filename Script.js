document.write("Menu Item \n");
document.write("Pizza-₹200");
document.write("Burger-₹300");
document.write("Chicken Briyani-₹250");
document.write("Apple Juice-₹100");
document.write("Idly-₹80");
let Item=prompt("Enter your favourite dish:");
let Quantity=prompt("Enter your Quantity");
let Price;
let Discount;
switch(Item){
    case "Pizza":
    Price=200*Quantity;
    if(Price<500){
        alert(Price);
    }
    else{
        Discount=0.1*Price;
        Price=Price-Discount;
        alert(Price);
    }
    break;
    case "Burger":
    Price=300*Quantity;
    if(Price<500){
        alert(Price);
    }
    else{
        Discount=0.1*Price;
        Price=Price-Discount;
        alert(Price);
    }
    break;
    case "ChickenBriyani":
    Price=250*Quantity;
    if(Price<500){
        alert(Price);
    }
    else{
        Discount=0.1*Price;
        Price=Price-Discount;
        alert(Price);
    }
    break;
    case "AppleJuice":
    Price=100*Quantity;
    if(Price<500){
        alert(Price);
    }
    else{
        Discount=0.1*Price;
        Price=Price-Discount;
        alert(Price);
    }
    break;
    case "Idly":
    Price=80*Quantity;
    if(Price<500){
        alert(Price);
    }
    else{
        Discount=0.1*Price;
        Price=Price-Discount;
        alert(Price);
    }
    break;
}




