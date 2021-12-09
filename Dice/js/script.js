var elDiceOne  = document.getElementById('dice1');
var elDiceTwo  = document.getElementById('dice2');
var elComeOut  = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);

  console.log(diceOne + ' ' + diceTwo);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var dice = 1; dice <= 6; dice++) {
    elDiceTwo.classList.remove('show-' + dice);
    if (diceTwo === dice) {
      elDiceTwo.classList.add('show-' + dice);
    }
  }
  setTimeout(rollDice(),
  1000);
  document.querySelector("#total").innerHTML = "your roll is:" + ((diceOne + 1) + (diceTwo + 1 ));
}
