var pizzaPrice = 0;

function Pizza(size,topping,pizzaPrice) {
  this.size = size;
  this.toppings = topping;
  this.pizzaPrice = 0;
}
Pizza.prototype.price = function() {
    if (this.size === "Small") {
      this.pizzaPrice += $10 ;
      console.log("sm");
    }
    else if (this.size === "Medium") {
      this.pizzaPrice += $15;
      console.log("md");
    }
    else if (this.size === "Large") {
      this.pizzaPrice += $30;
      console.log("lg");
    }
    if (this.topping.indexOf("Onions") >= 0) {
      this.pizzaPrice += $5;
      console.log("Onions");
    }
  
    if (this.topping.indexOf("green peppers") >= 0) {
      this.pizzaPrice += $7;
      console.log("green peppers");
    }
  
    if (this.topping.indexOf("olives") >= 0) {
      this.pizzaPrice += $6;
      console.log("olives");
    }
    if (this.topping.indexOf("spinach") >= 0) {
      this.pizzaPrice += $8;
      console.log("spinach");
    }
    if (this.topping.indexOf("mushrooms") >= 0) {
      this.pizzaPrice += $3;
      console.log("mushrooms");
    }

    if (this.topping.indexOf("chicken") >= 0) {
        this.pizzaPrice += $15;
        console.log("chicken");
      }
    
      if (this.topping.indexOf("pepperoni") >= 0) {
        this.pizzaPrice += $10;
        console.log("pepperoni");
    
      }
    
      if (this.topping.indexOf("canadian bacon") >= 0) {
        this.pizzaPrice += $12;
        console.log("canadian bacon");
      }
      if (this.toppings.indexOf("sausage") >= 0) {
        this.pizzaPrice += $8;
        console.log("sausage");
      }
      if (this.topping.indexOf("chicken" && "sausage") >= 0) {
        alert("You can not choose a combination of chicken and sausage");
        $("#info").show();
        $("#responses").hide();
    
      }
    
    //   return this.pizzaPrice;
      console.log("total");
    }
    $(document).ready(function(){
        $("form#pizza").submit(function(event){
          event.preventDefault();
      
          var resultSize = $("input[type=radio][name=size]:checked").val();
          var resultTopping = [];
          $("input[type=option][name=toppings]:checked").each(function(){
            resultTopping.push($(this).val());
          });
          var newPizza = new Pizza(resultSize,resultTopping,pizzaPrice);
          newPizza.price();
          console.log("result");
      
          $("#responses").append("<li>" + "Click and get your order " + newPizza.size + " " + newPizza.topping + " pizza. " + " Your total price is " + newPizza.pizzaPrice + "</li>");
          console.log("responses");

          function resetFields() {
            $("input#new-size").val("");
            $("input#new-topping").val("");
            $("input.new-crust").val("");
          }
    });
});
    
  
