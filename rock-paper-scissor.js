let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if(!score){
  score = {  
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

updateScoreElement();


function playGame(playerMove ) {
  const computerMove = pickComputerMove();
  let result ='' ;

  if(playerMove === 'Scissor'){
    if(computerMove === 'rock'){
    result = 'You lose.'; 
    }
    else if(computerMove === 'paper'){
      result = 'You win.';
    }
    else if(computerMove === 'Scissor'){
      result = 'Tie.';
    }
  }
  
  else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You win.';
    }
    else if(computerMove === 'paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'Scissor'){
      result = 'You lose.';
    }
  }

  else if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie.';
    }
    else if(computerMove === 'paper'){
      result = 'You lose.';
    }
    else if(computerMove === 'Scissor'){
      result = 'You win.';
    }
  }
  
  if(result === 'You win.'){
    score.wins+=1;
  }else if(result === 'You lose.'){
    score.losses+=1;
  }else if(result === 'Tie.'){
    score.ties+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;


  // alert(`You picked ${playerMove} . computer picked ${computerMove} . ${result}
  // Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`);

}

function updateScoreElement(){
  document.querySelector('.js-score').   innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;
}

function afterReset(){
  document.querySelector('.js-moves').innerHTML = ``;
  document.querySelector('.js-result').innerHTML = ``;
}
z


function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';


  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissor';
  }
  return computerMove;

} 