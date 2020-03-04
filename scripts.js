 //user interface
var totalCosts = [];

function order(size, crust, vegTopping, nonVegTopping) {
    this.size = size;
    this.crust = crust;
    this.nonVegTopping = nonVegTopping;
    this.vegTopping = vegTopping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaNonVegTopping = ["Chicken", "Sausage", "Bacon", ];
var pizzaVegTopping = ["Mushrooms", "Onions", "Capsicum", ];

order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 200;
    } else if (this.size === pizzaSize[1]) {
        this.price += 400;
    } else if (this.size === pizzaSize[2]) {
        this.price += 700;
    }

    if (this.crust === pizzaCrust[0]) {
        this.price += 50;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 50;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }

    if (this.nonVegTopping === pizzaNonVegTopping[0]) {
        this.price += 150;
    } else if (this.nonVegTopping === pizzaNonVegTopping[1]) {
        this.price += 150;
    } else if (this.nonVegTopping === pizzaNonVegTopping[2]) {
        this.price += 150;
    }


    if (this.vegTopping === pizzaVegTopping[0]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[1]) {
        this.price += 200;
    } else if (this.vegTopping === pizzaVegTopping[2]) {
        this.price += 200;
    }

    return this.price;
}


order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}


$(document).ready(function() {
    $("input#order").click(function(event) {
        event.preventDefault();
        var sizes = $("select#pizza").val();
        var crusts = $("select#crust").val();
        var noVegToppings = $("select#topnoveg").val();
        var vegToppings = $("select#topveg").val();

        var newPizzaOrder = new order(sizes, crusts, noVegToppings, vegToppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);


        $("#size").text(sizes);
        $("#cr").text(crusts);
        $("#nvgs").text(noVegToppings);
        $("#vgs").text(vegToppings);
        $("#text").text(newPizzaOrder.totalCost());


    });

    $("#deliver").click(function() {
        prompt("Please insert you name")
        prompt("Please insert you location")
        prompt("Please insert your addrress")
        alert("You will be charged an extra sh200 for delivery")
        alert("Thank you for Your Purchase!Your order will be delivered to your location ")

    });

})


