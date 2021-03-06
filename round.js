class Round {
    constructor(anagram, roundScore) {        
        this.anagram = anagram;
        this.roundScore = 0;
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
        this.roundScore = this.roundScore - 10;       
        return mixedWord;       
    }
    initiateAnagram() {
        let newWord = this.anagram.createAnagram();
        return newWord;
    }    
}