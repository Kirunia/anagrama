class Round {
    constructor(anagram, roundScore) {        
        this.anagram = anagram;
        this.roundScore = 0;        
        this.reshuffleCounter = 0;        
    }    
    compareResult(valueToCompare) {
        let wordLength = this.anagram.mixedWord.length;
        let result = this.anagram.compareWords(valueToCompare); 
        if (result == true) {
            this.roundScore = this.roundScore + 10 * wordLength;
        }
        else {
            this.roundScore = this.roundScore - 20;
        }       
        return result;
    }
   
    reshuffleWord() {       
        let mixedWord = this.anagram.createAnagram();
        this.reshuffleCounter = this.reshuffleCounter + 1;
        return mixedWord;       
    }
    refreshAnagram() {
        let mixedWord = this.anagram.createAnagram();
        return mixedWord;
    }    
}