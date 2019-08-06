// var pizzaPrice = 0;
// var pizza;
function Menu (size, toppings, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.price = 0;
  }
  Menu.prototype.fullPizza = function() {
    return this.size + " " + this.crust + " " + this.toppings + " " +this.number + " " + this.price;
  }
    // user interface logic
    $(document).ready(function() {

      $("form#pizza").submit(function(event) {
        event.preventDefault();
        //  $("#order").click(function() {
          if ($("#inlineRadio1:checked").val()) {
        var inputtedSize = $("#inlineRadio1:checked").val();
        console.log(inputtedSize);
        var price = 10
        var cash1= 5
       }else if ($("#inlineRadio2:checked").val()) {
          var inputtedSize = $("#inlineRadio2:checked").val();
          console.log(inputtedSize);
          var price = 6
          var cash1= 3
        }else if ($("#inlineRadio3:checked").val()) {
          var inputtedSize = $("#inlineRadio3:checked").val();
        console.log(inputtedSize);
        var price = 17
        var cash1= 7
        }else {
          alert("Refresh")
        }
        
        var inputtedCrust = $("select#crust").val();
        if ($("select#crust")==="Garlic Butter Crust") {
          var price = 20
          var cash2 = 8
         }else if ($("select#crust")==="Spicy Crust") {
          var price = 12
          var cash2 = 11
         }else if ($("select#crust")==="Plain Crust") {
          var price = 30
          var cash2 = 13
         }else if ($("select#crust")==="Thick Crust") {
          var price = 19
          var cash2 = 12
         }else if ($("select#crust")==="Flatbread Crust") {
          var price = 20
          var cash2 = 14
         }else if ($("select#crust")==="Cheese-Stuffed Crust") {
          var price = 13
          var cash2 = 16 
         }else {
           alert("refresh")
         }
console.log(inputtedCrust);
        var inputtedToppings = $("select#toppings").val();
        if ($("select#toppings").val==="Onions") {
          var price = 25
          var cash3 = 15
        }else if ($("select#toppings").val==="Green Peppers") {
          var price = 26
          var cash3 = 18
        }else if ($("select#toppings").val==="Black Olives") {
          var price = 17
          var cash3 = 20
        }else if ($("select#toppings").val==="Spinach") {
          var price = 25
          var cash3 = 22
        }else if ($("select#toppings").val==="Mushrooms") {
          var price = 19
          var cash3 = 21
        }else if ($("select#toppings").val==="Chicken") {
          var price = 21
          var cash3 = 27 
        }else if ($("select#toppings").val==="Pepperoni") {
          var cash3 = 28
        }else if ($("select#toppings").val==="Beef") {
          var price = 23
          var cash3 = 29
        }else if ($("select#toppings").val==="Sausage") {
          var price = 20
          var cash3 = 19  
        }else {
          alert("refresh")
        }
        console.log(inputtedToppings);
        var inputtedNumber = $("kaka#number");
        console.log(inputtedNumber);
        var inputtedprice = 0;
        var newPizza = new Menu(inputtedSize, inputtedCrust, inputtedToppings, inputtedNumber, inputtedprice);
        var pizzaCash = parseInt(cash1) + parseInt(cash2) + parseInt(cash3) * inputtedNumber + parseInt(price);
        var total = pizzaCash + 2;
        $("div#seen").append("<li>" +newPizza.fullPizza() +" " + pizzaCash +total + "</li>");
      });
});   

    $(document).ready(function() {
      $("#del").click(function() {
      alert("Please tell us your location and will send you your delivery");
      prompt("Please enter your location(house number, street, village)");
      alert("The charge for delivery is $8 , your receive your delivery in 30 minutes thanks for shopping with jas's pizza we are willing to serve you again")
    });
    });
  