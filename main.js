$(function(){

  var list = $(".l-list");
  var template = $(".row-template").html();
  var input = $(".adding-field");
  var rightTemplate = $(".right-template").html();
  var item_array = [];

  function addItemToArray(name) {
    item_array.push({name:name, count:1, stage:true});
  }

  function plusCountByName(name) {
    item_array.forEach(function(value){
      if(name == value.name){
        value.count+=1;
      }
    });
  }

  function printList() {
    item_array.forEach(function(value){
      console.log(value);
    });
  }

  function addRow(name) {
    var node = $(template);
    node.find(".product").text(name);
    node.find(".number").text("1");
    list.append(node);
  }

  function drawRow(name) {
    if(name.length>0){
      addRow(name);
      addItemToArray(name);
    }
  }

  function initList() {
    drawRow("Помідори");
    drawRow("Печиво");
    drawRow("Сир");
  }

  $(".adding-button").click(function(){
    var name = input.val();
    drawRow(name);
  });

  initList();

  function drawRightList() {
    var node = $(rightTemplate);
    var itemTemplate = $(".item-template").html();
    $(".right").remove();
    item_array.forEach(function(value){
      if(value.stage){
        var temp = $(itemTemplate);
        var item = node.find(".not-bought");
        temp.find(".inner1").text(value.name);
        temp.find(".inner2").text(value.count);
        item.append(temp);
      }
      else{
        var item = node.find(".alr-bought");
        itemTemplate.find(".inner1").text(value.name);
        itemTemplate.find(".inner2").text(value.count);
        item.css("text-decoration", "line-through");
        item.text(itemTemplate);
      }
    });
    $(".center").append(node);
  }

  drawRightList();

  function plus(name) {
    plusCountByName(name);
  }

  $(".plus").click(function(){
    plus($(this).parent().parent().find(".product").text());
    var count = $(this).parent().find(".number").text();
    $(this).parent().find(".number").text(parseInt(count)+1);
    drawRightList();
  })


  // function addRow(name){
  //   var quantity = 1;
  //   var $node = $(template);
  //   var $product = $node.find(".product");
  //   var $plus = $node.find(".plus");
  //   var $minus = $node.find(".minus");
  //   var $number = $node.find(".number");
  //   var $bought = $node.find(".bought");
  //   var $unbought = $node.find(".unbought");
  //   var $cancel = $node.find(".cancel");
  //
  //   console.log('"' + name + '"' + " added to row list");
  //   $product.text(name);
  //
  //   $plus.click(function() {
  //     quantity++;
  //     $number.text(quantity);
  //   });
  //
  //   $minus.click(function() {
  //     if(quantity>1){
  //       quantity--;
  //       $number.text(quantity);
  //     }
  //   })
  //
  //   $bought.click(function() {
  //     $bought.addClass("hidden-bought");
  //     $cancel.remove();
  //     $plus.remove();
  //     $minus.remove();
  //     $product.addClass("crossed");
  //     $unbought.removeClass(".hidden-unbought");
  //     $unbought.addClass("unbought");
  //   })
  //
  //   $cancel.click(function() {
  //     $node.remove();
  //   })
  //
  //   $list.append($node);
  // }
  //
  //
  // $(".adding-button").click(function(){
  //   var text = $input.val();
  //   if(text.length > 0){
  //     addRow(text);
  //     $input.val("");
  //   }
  // })
  //
  //
  // addRow("Помiдори");
  // addRow("Печиво");
  // addRow("Сир");


});
