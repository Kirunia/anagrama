class Game {
  constructor(gameScore,currentRound,currentScore,roundResult) {
    this.gameScore = 0;
    this.roundResult = roundResult;
    this.currentScore = currentScore;
    this.currentRound = currentRound;
    this.roundsCollection = [];    
  }
  addNewRound() {
    let newAnagram = new Anagram(pickWord());
    this.currentRound = new Round(newAnagram);
    this.roundsCollection.push(this.currentRound);
    return this.currentRound;
  }
  calculateGameScore() {
    this.gameScore = this.gameScore + this.currentRound.roundScore;
  }
  updateGameScore() {
    this.currentScore = this.gameScore + this.currentRound.roundScore;
  }
  endRound(userInput){
    let result = this.currentRound.compareResult(userInput); 
    if (result == true) { 
      this.roundResult = true;
    }
    else {
      this.roundResult = false;
    }
    this.calculateGameScore();
  }
}