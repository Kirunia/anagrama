class Round {
    constructor(anagram, roundScore, answerScore) {        
        this.anagram = anagram;
        this.answerScore = answerScore;        
        this.reshuffleCounter = 0;
        this.roundScore = roundScore;
    }    
    calculateResult(valueToCompare) {
        let wordLength = this.anagram.mixedWord.length;
        let result = this.anagram.compareWords(valueToCompare); 
        if (result == true) {
            this.answerScore = this.answerScore + 10 * wordLength;
        }
        else {
            this.answerScore = this.answerScore - 20;
        }       
        return result;
    }
   
    reshuffleWord() {       
        let mixedWord = this.anagram.createAnagram();
        this.reshuffleCounter = this.reshuffleCounter + 1; 
        return mixedWord;       
    }
    refreshAnagram() {
        this.reshuffleCounter = 0;
        this.roundScore = 0;        
        this.answerScore = 0;  
        let mixedWord = this.anagram.createAnagram();
        return mixedWord;
    }
    calculateRoundScore(){
        this.roundScore = this.roundScore + this.answerScore - this.reshuffleCounter * 10;
        return this.roundScore;
    }
}