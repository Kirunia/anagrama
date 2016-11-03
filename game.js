class Game {
  constructor(gameScore,currentRound,newAnagram) {
    this.gameScore = gameScore;
    this.currentRound = currentRound;
    this.roundsCollection = [];    
  }
  addNewRound() {
    let newAnagram = new Anagram(pickWord());
    this.currentRound = new Round(newAnagram);
    this.roundsCollection.push(this.currentRound);
    return this.currentRound;
  }
}