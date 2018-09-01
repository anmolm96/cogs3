
// 1 = rock, 2 = paper, 3 = scissor
var playerRoll; 
var gameMessage = $('#game-message');

const randRoll = () => Math.floor(Math.random() * 3 + 1);


$('.rock').click(() => {
  playerRoll = 1;
  var computerRoll = randRoll();
  
  if (computerRoll === playerRoll) gameMessage.html('').append('Draw');
    
  else if (playerRoll === 1 && computerRoll === 2) gameMessage.html('').append('Lost');    
    
  else gameMessage.html('').append('Won');
});

$('.paper').click(() => {
  playerRoll = 2;
  var computerRoll = randRoll();
  
  if (computerRoll === playerRoll) gameMessage.html('').append('Draw');
  
  else if (playerRoll === 2 && computerRoll === 1) gameMessage.html('').append('Won');
  
  else gameMessage.html('').append('Lost');
  
});

$('.scissors').click(function() {
  playerRoll = 3;
  var computerRoll = randRoll();
  //draw
  if (computerRoll === playerRoll) gameMessage.html('').append('Draw');
  
  else if (playerRoll === 3 && computerRoll === 2) gameMessage.html('').append('Won');
  
  else gameMessage.html('').append('Lost');
});