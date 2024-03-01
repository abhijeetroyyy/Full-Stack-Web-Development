let scorestr = localStorage.getItem('score');
let score;
resetscore(scorestr);
function resetscore(scorestr) {

  score = scorestr ? JSON.parse(scorestr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };
  score.displayscore = function () {
    return `Number of matches won:- ${score.win} ,
    Number of matches lost:- ${score.lost} ,
    Number of matches  drawn or tied:- ${score.tie}`
  }
}

function genaratecomputerchoise() {
  let computer_choise;
  let rand = Math.random() * 3;

  if (rand > 0 && rand <= 1) {
    return 'bat';
  }
  else if (rand > 1 && rand <= 2) {
    return 'ball';

  }
  else if (rand > 2 && rand <= 3) {
    return 'stump';
  }
  return computer_choise;
}
function getresult(usermove, compurtermove) {
  if (usermove === `bat`) {
    if (compurtermove === `bat`) {
      score.tie++
      return (`its a tie`);
    }
    else if (compurtermove === `stump`) {
      score.lost++
      return ('computer has won');
    }
    else if (compurtermove === `ball`) {
      score.win++;
      return ('you have won');
    }
  }
  else if (usermove === `ball`) {
    if (compurtermove === `bat`) {
      score.lost++
      return (`computer have won`);
    }
    else if (compurtermove === `stump`) {
      score.win++
      return ('you have won');
    }
    else if (compurtermove === `ball`) {
      score.tie++
      return ('its a tie');
    }
  }
  else {
    if (compurtermove === `bat`) {
      score.win++
      return (`user have won`);
    }
    else if (compurtermove === `stump`) {
      score.tie++
      return ('Its a tie');
    }
    else if (compurtermove === `ball`) {
      score.win++
      return ('computer has won');
    }
  }
}
function showresult(usermove, computermove, result) {
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('#user-move').innerText = `You have chossen ${usermove}`;
  document.querySelector('#computer-move').innerText = `Computer choosed ${computermove}`;
  document.querySelector('#result').innerText = `And you have ${result}`;
  document.querySelector('#score').innerText = `the match ${score.displayscore()}`;
  // alert(`  You have chossen ${usermove}
  // Computer choosed ${computermove}
  // And you have ${result} the match
  // ${score.displayscore()}`);
}