// Biz Logic
function Pizza (size, toppings, values) {
  this.size = size;
  this.toppings = [];
  this.values = [];
  this.price;
}

Pizza.prototype.calculatePrice = function(y) {

  //size and values array added to get price
  if (this.size === 'small') {
    this.price = 10 + y.reduce(add, 0);
  } else if (this.size === 'large') {
    this.price = 14 + y.reduce(add, 0) ;
  };
};
// pushes toppings into topping array
Pizza.prototype.pushTopping = function(x) {
  this.toppings.push(x)
};

function add(a, b) {
    return a + b;
}

// User Logic
$(document).ready(function() {
  $("form.order-form").submit(function(event) {
    event.preventDefault();
    // new pizza object
    var pizza1 = new Pizza ("small", [],[]);
    // pushes the values from radios into the size array of the object
    $('input[name=pizza-size]:checked').each(function(){
    pizza1.size= $(this).val();
    });
    // pushes the values from checked boxes into the values array of the object
    $("input:checkbox:checked").each(function(){
    pizza1Values = parseInt($(this).val());
    pizza1.values.push(pizza1Values)
    });
    $("input:checkbox[name=pepperoni]:checked").each(function(){
      var x = "pepperoni"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=olive]:checked").each(function(){
      var x = "olive"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=wing]:checked").each(function(){
      var x = "chicken wing"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=gyoza]:checked").each(function(){
      var x = "gyoza"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=cricket]:checked").each(function(){
      var x = "cricket"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=fungus]:checked").each(function(){
      var x = "black fungus"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=crab-leg]:checked").each(function(){
      var x = "crab leg"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=beef]:checked").each(function(){
      var x = "A5 wagyu beef"
      pizza1.pushTopping(x);
    });
    $("input:checkbox[name=money]:checked").each(function(){
      var x = "bacon-wrapped money"
      pizza1.pushTopping(x);
    });
    // pizza price calculation with values from the form
    var y = pizza1.values;
    pizza1.calculatePrice(y);
    // print it
    var toppers = pizza1.toppings.join(", ");
    $("#pizza-price").append("Your " + pizza1.size + " " + toppers + " pizza will be $" + pizza1.price + ". ");
    // reset inputs
    $('input').prop('checked', false);
  });
  // place order
  $("#place-order").click(function(event) {
    event.preventDefault();
    var person = prompt("Please enter your name");
      $("#pizza-price").append("OK " + person + "! Prepare to download pizza!");
  });
});
