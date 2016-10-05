$(function(){

  var $list = $(".l-list");
  var template = $(".row-template").html();
  var $input = $(".adding-field");

  function addRow(name){
    var quantity = 1;
    var $node = $(template);
    var $product = $node.find(".product");
    var $plus = $node.find(".plus");
    var $minus = $node.find(".minus");
    var $number = $node.find(".number");
    var $bought = $node.find(".bought");
    var $unbought = $node.find(".unbought");
    var $cancel = $node.find(".cancel");

    console.log('"' + name + '"' + " added to row list");
    $product.text(name);

    $plus.click(function() {
      quantity++;
      $number.text(quantity);
    });

    $minus.click(function() {
      if(quantity>1){
        quantity--;
        $number.text(quantity);
      }
    })

    $bought.click(function() {
      $bought.addClass("hidden-bought");
      $cancel.remove();
      $plus.remove();
      $minus.remove();
      $product.addClass("crossed");
      $unbought.removeClass(".hidden-unbought");
      $unbought.addClass("unbought");
    })

    $cancel.click(function() {
      $node.remove();
    })

    $list.append($node);
  }


  $(".adding-button").click(function(){
    var text = $input.val();
    if(text.length > 0){
      addRow(text);
      $input.val("");
    }
  })


  addRow("Помiдори");
  addRow("Печиво");
  addRow("Сир");


});
