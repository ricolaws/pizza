// Biz Logic
function Pizza (size, toppings, values) {
  this.size = size;
  this.toppings = [];
  this.values = [];
}

// Pizza.prototype.pizzaPrice = function() {
//
// };

// User Logic
$(document).ready(function() {
  $("form.order-form").submit(function(event) {
    event.preventDefault();
    var pizza1 = new Pizza ("small", [],[]);
    console.log(pizza1);
  });
});
