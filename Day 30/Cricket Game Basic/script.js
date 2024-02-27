let score = {
  win: 0,
  lost: 0,
  tie: 0,
};
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
  // console.log(score);
  alert(`  You have chossen ${usermove}
  Computer choosed ${computermove}
  And you have ${result} the match
  won:- ${score.win} 
  lost:- ${score.lost} 
  tie:- ${score.tie}`);
}