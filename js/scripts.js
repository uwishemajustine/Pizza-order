// var pizzaPrice = 0;
// var pizza;
function Menu (size, toppings, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
  }
  Menu.prototype.fullPizza = function() {
    return this.size + " " + this.crust + " " + this.toppings + " " +this.number;
  }
    // user interface logic
    $(document).ready(function() {

      $("button#Order").submit(function(event) {
        event.preventDefault();
        //  $("#order").click(function() {
          if ($("#inlineRadio1:checked").val()) {
        var inputtedSize = $("#inlineRadio1:checked").val();
        console.log(inputtedSize);
        var cash1= 5
       }else if ($("#inlineRadio2:checked").val()) {
          var inputtedSize = $("#inlineRadio2:checked").val();
          console.log(inputtedSize);
          var cash1= 3
        }else if ($("#inlineRadio3:checked").val()) {
          var inputtedSize = $("#inlineRadio3:checked").val();
        console.log(inputtedSize);
        var cash1= 7
        }else {
          alert("Refresh")
        }
        
        var inputtedCrust = $("select#crust").val();
        if ($("select#crust").val==="Garlic Butter Crust") {
          var cash2 = 8
        }else if ($("select#crust").val==="Spicy Crust") {
          var cash2 = 11
        }else if ($("select#crust").val==="Plain Crust") {
          var cash2 = 13
        }else if ($("select#crust").val==="Thick Crust") {
          var cash2 = 12
        }else if ($("select#crust").val==="Flatbread Crust") {
          var cash2 = 14
        }else if ($("select#crust").val==="Cheese-Stuffed Crust") {
          var cash2 = 16 
        }else {
          alert("Refresh and order again")
        }

        var inputtedToppings = $("select#toppings").val();
        if ($("select#toppings").val==="Onions") {
          var cash3 = 15
        }else if ($("select#toppings").val==="Green Peppers") {
          var cash3 = 18
        }else if ($("select#toppings").val==="Black Olives") {
          var cash3 = 20
        }else if ($("select#toppings").val==="Spinach") {
          var cash3 = 22
        }else if ($("select#toppings").val==="Mushrooms") {
          var cash3 = 21
        }else if ($("select#toppings").val==="Chicken") {
          var cash3 = 27 
        }else if ($("select#toppings").val==="Pepperoni") {
          var cash3 = 28
        }else if ($("select#toppings").val==="Beef") {
          var cash3 = 29
        }else if ($("select#toppings").val==="Sausage") {
          var cash3 = 19  
        }else {
          alert("Refresh and order again")
        }
        var inputtedNumber = $("newnumber#number");
        // console.log(inputtedNumber);
        var newPizza = new Menu(inputtedSize, inputtedCrust, inputtedToppings, inputtedNumber);
        var pizzaCash = parseInt(cash1) + parseInt(cash2) + parseInt(cash3);
        var totalCash = pizzaCash + inputtedNumber;
        var finaltotal = totalCash + 2;
        $("ul#responses").append("<li>" +newPizza.fullPizza() + totalcash + finaltotal +"</li>");
        // console.log(newPizza.fullPizza() )
        // $("ul#responses").append("<li>" + "You will pay" + totalCash + $+"</li>");
        // console.log(newPizza.pizzacash)
        // $("#del").click(function(){
        //   $("ul#responses").append("<li>" + "total to be paid" + total + $+"</li>");
  //       $("#newPizza").text("");
  // $("#newPizza").append(Pizza);
  // var totalCash = newPizza.pizzaCash("inputtedSize", "inputtedCrust","inputtedToppings", "inputtedNumber");
  // $("#seen").append("Your total is $" + totalCash + ".");
  });
});   

    $(document).ready(function() {
      $("#del").click(function() {
      alert("Please tell us your location and will send you your delivery");
      prompt("Please enter your location(house number, street, village)");
      alert("The charge for delivery is $8 , your receive your delivery in 30 minutes thanks for shopping with jas's pizza we are willing to serve you again")
    });
    });
  