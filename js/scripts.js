var pizzaPrice = 0;

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust
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
    if (this.toppings.indexOf("Onions") >= 0) {
      this.pizzaPrice += $5;
      console.log("Onions");
    }
  
    if (this.toppings.indexOf("green peppers") >= 0) {
      this.pizzaPrice += $7;
      console.log("green peppers");
    }
  
    if (this.toppings.indexOf("olives") >= 0) {
      this.pizzaPrice += $6;
      console.log("olives");
    }
    if (this.toppings.indexOf("spinach") >= 0) {
      this.pizzaPrice += $8;
      console.log("spinach");
    }
    if (this.toppings.indexOf("mushrooms") >= 0) {
      this.pizzaPrice += $3;
      console.log("mushrooms");
    }

    if (this.toppings.indexOf("chicken") >= 0) {
        this.pizzaPrice += $15;
        console.log("chicken");
      }
    
      if (this.toppings.indexOf("pepperoni") >= 0) {
        this.pizzaPrice += $10;
        console.log("pepperoni");
    
      }
    
      if (this.toppings.indexOf("canadian bacon") >= 0) {
        this.pizzaPrice += $12;
        console.log("canadian bacon");
      }
      if (this.toppings.indexOf("sausage") >= 0) {
        this.pizzaPrice += $8;
        console.log("sausage");
      }
      if (this.toppings.indexOf("chicken" && "sausage") >= 0) {
        alert("You can not choose a combination of chicken and sausage");
        $("#info").hide();
        $("#responses").hide();
    
      }
    
      return this.pizzaPrice;
      console.log("total");
    }
    $(document).ready(function(){
        $("form#pizza").submit(function(event){
          event.preventDefault();
      
          var resultSize = $("input[type=radio][name=size]:checked").val();
          var resultToppings = [];
          $("input[type=checkbox][name=toppings]:checked").each(function(){
            resultToppings.push($(this).val());
          });
          var newPizza = new Pizza(resultSize,resultToppings,pizzaPrice);
          newPizza.price();
          console.log("result");
      
          $("#responses").append("<li>" + "You ordered a " + newPizza.size + " " + newPizza.toppings + " pizza. " + " Your total price is " + newPizza.pizzaPrice + "</li>");
          console.log("responses");

    });
});
    
  
