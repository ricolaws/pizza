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
    $('input[name=pizza-size]:checked').each(function(){
    pizza1.size= $(this).val();
    });
    $("input:checkbox[name=pepparoni]:checked").each(function(){
      var x = "pepparoni"
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
    $("input:checkbox[name=scampi]:checked").each(function(){
      var x = "scampi"
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
    console.log(pizza1);
  });
});
