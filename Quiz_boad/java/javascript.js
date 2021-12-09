// var add = function(number1, number2) {
//      return number1 + number2;
//     };
//     var subtract = function(number1, number2) {
//      return number1 - number2;
//     };
//     var multiply = function(number1, number2) {
//      return number1 * number2;
//     };
//     var divide = function(number1, number2) {
//      return number1 / number2;
//     };
//     $(document).ready(function() {
//         $("form#add").submit(function(event){
//             event.preventDefault();
       
           
//          var number1 = parseInt($("#add1").val());
//          var number2 = parseInt($("#add2").val());
//          alert(add(number1, number2));
//     });
//         });





// var add = function(number1, number2) {
//     return number1 + number2;
//     };
//     var subtract = function(number1, number2) {
//     return number1 - number2;
//     };
//     var multiply = function(number1, number2) {
//     return number1 * number2;
//     };
//     var divide = function(number1, number2) {
//     return number1 / number2;
//     };
    
//     $(document).ready(function() {
//     $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     // alert(add(number1, number2));

//     $("#outpu").text(add(number1,number2))
//     });
//     });

var result1 = 1;
var result2 = 2;
var result3 = 3;
var result4 = 4;
var result5 = 5;

function score () {
  return "you have scored" + total;
}
$(document).ready(function() {
  $("#button2").click(function() {
    var question1 = $("input[name='question1']:checked").val();
    var question2 = $("input[name='question2']:checked").val();
    var question3 = $("input[name='question3']:checked").val();
    var question4 = $("input[name='question4']:checked").val();
    var question5 = $("input[name='question5']:checked").val();
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);

    if (question1 === "right") {
      result1 = 20;
    }else {
      result1 = 0;
    }
    if (question2 ==="right") {
      result2 = 20;
    } else {
      result2 = 0;
    }
    if (question3 === "right") {
      result3 = 20;
    } else {
      result3 = 0;
    }
    if (question4 === "right") {
      result4 = 20;
    } else {
      result4 = 0;
    }
    if (question5 === "right") {
      result5 = 20;
    }else {
      result5= 0;
    }
    var score = (result1 + result2 + result3 + result4 + result5);
    console.log(score);

    $("#result").text("Your score is: " + score + " points.");
    
  })
})