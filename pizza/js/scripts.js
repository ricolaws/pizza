// Biz Logic
function Pizza (size, toppings, values) {
  this.size = size;
  this.toppings = [];
  this.values = [];
}

Pizza.prototype.pushTopping = function(x) {
  this.toppings.push(x)
};

// User Logic
$(document).ready(function() {
  $("form.order-form").submit(function(event) {
    event.preventDefault();
    var pizza1 = new Pizza ("small", [],[]);
    $("input:checkbox:checked").each(function(){
    pizza1Values = $(this).val();
    pizza1.values.push(pizza1Values)

    });
    $("input:checkbox[name=gyoza]:checked").each(function(){
            var x = "gyoza"
            pizza1.pushTopping(x);
          });
    console.log(pizza1);
  });
});
