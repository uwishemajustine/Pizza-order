var pizzaPrice = 0;

function Pizza(size,toppings,pizzaPrice) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

Pizza.prototype.price = function() {
  if (this.size === "Small") {
    this.pizzaPrice += 2;
    console.log("sm");
  }
  else if (this.size === "Medium") {
    this.pizzaPrice += 3;
    console.log("md");
  }
  else if (this.size === "Large") {
    this.pizzaPrice += 4;
    console.log("lg");
  }
  if (this.toppings.indexOf("Cheese") >= 0) {
    this.pizzaPrice += 2;
    console.log("ch");
  }

  if (this.toppings.indexOf("Peanut Butter") >= 0) {
    this.pizzaPrice += 10;
    console.log("pb");

  }

  if (this.toppings.indexOf("Vegetarian") >= 0) {
    this.pizzaPrice += 3;
    console.log("veg");
  }
  if (this.toppings.indexOf("Supreme") >= 0) {
    this.pizzaPrice += 5;
    console.log("supr");
  }
  if (this.toppings.indexOf("Pepperoni") >= 0) {
    this.pizzaPrice += 4;
    console.log("pepp");

  }

  if (this.toppings.indexOf("Pepperoni" && "Vegetarian") >= 0) {
    alert("You can not choose a combination of Pepperoni and Vegetarian");
    $("#info").hide();
    $("#responses").hide();

  }

  return this.pizzaPrice;
  console.log("total");
}