//class definition for an anagram
class Anagram {
    constructor(initialWord){         
        this.initialWord = initialWord;
        this.mixedWord = this.createAnagram(); 
    }    
    mixLetters(letters) {
    for (let j = 0; j < letters.length; j++) {
        let letterToReplace = letters[j];
        let randomNumber = pickRandomNumber(j + 1, letters.length);
        let letterToReplaceWith = letters[randomNumber];
        letters[j] = letterToReplaceWith;
        letters[randomNumber] = letterToReplace;             
        }  
    }
    createAnagram(){ 
       let letters = [];           
       for (let initialLetter of this.initialWord) {
          letters.push(initialLetter);                     
       }; 
       this.mixLetters(letters); 
       this.mixedWord = letters.join('');
       return this.mixedWord;                 
   } 
   compareWords(valueToCompare) {
       if (valueToCompare == this.initialWord) {
           return true;
       }
       else {
           return false;
       }
   }  
}