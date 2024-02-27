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
        return (`its a tie`);
      }
      else if (compurtermove === `stump`) {
        return ('computer has won');
      }
      else if (compurtermove === `ball`) {
        return ('you have won');
      }
    }
    else if (usermove === `ball`) {
      if (compurtermove === `bat`) {
        return (`computer have won`);
      }
      else if (compurtermove === `stump`) {
        return ('you have won');
      }
      else if (compurtermove === `ball`) {
        return ('its a tie');
      }
    }
    else {
      if (compurtermove === `bat`) {
        return (`user have won`);
      }
      else if (compurtermove === `stump`) {
        return ('Its a tie');
      }
      else if (compurtermove === `ball`) {
        return ('computer has won');
      }
    }
  
  
  
  
  
  }