// var pizzaPrice = 0;

function menu (size, toppings, crust) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
   
  }
  pizza.prototype.fullmenu = function() {
    return this.size + " " + this.toppings + " " + this.crust;
  }
    // user interface logic
    function resetFields() {
      $("input#size").val("");
      $("input#toppings").val("");
      $("input#crust").val("");
    }

  $(document).ready(function() {
        $("form#menu").submit(function(event) {
           event.preventDefault();
    
  var inputtedSize=$("#inlineRadio1:checked").val();
  var inputtedToppings=$("#inlineRadio2:checked").val();
  var inputtedCrust=$("#inlineRadio3:checked").val();

  console.log("inlineRadio1, inlineRadio2, inlineRadio3")
        });
      });
  