// var pizzaPrice = 0;
// var pizza;
function menu (size, toppings, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.menu = [];
  }
  menu.prototype.pizza = function() {
    return this.size + " " + this.crust + " " + this.toppings;
  }
    // user interface logic
    $(document).ready(function() {

      $("form#menu").submit(function(event) {
        event.preventDefault();
         $("Order").click(function() {
        var inputtedSize = $("radio#size").val();
        console.log("inputtedSize")
        var inputtedCrust = $("select#crust").val();
        console.log("inputtedCrust");
        var inputtedToppings = $("select#toppings").val();
        console.log("inputtedToppings") 
        var newPizza = new Menu(inputtedSize, inputtedCrust, inputtedToppings);
    
         });
      });
    });

        // $("ul#pizza-order").append("<li><button type='submit' id='submit'>Order</button>" + " Pizza Order" + "</button></span></li>");
    
        
    
// function Pizza(size) {
//   this.pizzasize = size;
//   this.pizzacrust = crust;
//   this.toppings = toppings;
//   this.pizza = [];
// };

// // Price Prototype Method
// Pizza.prototype.price = function() {
//   var price = 7;

//   if (this.pizzasize === "Small") {
//     price += 2;
//   } else if (this.pizzasize === "Medium") {
//     price += 5;
//   } else if (this.pizzasize === "Large") {
//     price += 10;  
//   } else {
//     price += 1;
//   }

//   if (this.pizzasize.length === 0) {
//     price += 1;
//   } else {
//     price += this.pizzacrust.length;
//   }

//   return price;
// };

// // Front-End User Logic
// $(document).ready(function() {
//   $("form#pizza-form").submit(function(event) {
//     event.preventDefault();

//     var inputtedPizzaSize = $("radio#pizza-size").val();
//     var inputtedPizzaCrust = $("radio#pizza-crust").val();
//     var inputtedPizzaTopping = $("radio#pizza-topping").val();
//     var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCrust, inputtedPizzaTopping);

//     $.each($("input[name='toppings']:checked"), function() {
//       newPizza.pizza.push($(this).val());
// console.log()
//     });

//     $("ul#pizza-order-list").append("<li><button type='submit' id='submit'>Order</button>" + newPizza.pizzasize + " Pizza Order" + "</button></span></li>");

//     $(".pizzaOrder").last().click(function() {
//       $("#pizza-order-detail").show();
//       $(".pizza-size").text(newPizza.pizzasize);
//       $(".pizza-crust").text(newPizza.pizzacrust);
//       $(".pizza-toppings").text(newPizza.pizzatoppings);
//       $(".order-total").text(newPizza.price());

//     });
//   });
// });
  