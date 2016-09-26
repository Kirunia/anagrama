var wordsList = ["mleko", "doniczka", "komputer", "chusteczki", "nocnik", "koszula", "inwestygacja","algorytm", "dupa", "dziunia", "smoczek", "papierosy","wiosna"];

function pickWord() {
        let initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
        return initialWord;
    }
//class definition for an anagram
class Anagram {
    constructor(initialWord){         
        this.initialWord = initialWord;        
        this.letters = [];
    }
    pickRandomNumber(rangeStart, rangeEnd) {
    let randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
    }
    mixLetters() {
    for (var j = 0; j < this.letters.length; j++) {
        let letterToReplace = this.letters[j];
        let randomNumber = this.pickRandomNumber(j + 1, this.letters.length);
        let letterToReplaceWith = this.letters[randomNumber];
        this.letters[j] = letterToReplaceWith;
        this.letters[randomNumber] = letterToReplace;             
        }  
    }
    createAnagram(){           
       for (let initialLetter of this.initialWord) {
          this.letters.push(initialLetter);                     
       }; 
       this.mixLetters(); 
       let mixedWord = this.letters.join('');
       return mixedWord;                 
   } 
   compareResult(valueToCompare) {
       if (valueToCompare == this.initialWord) {
           return true;
       }
       else {
           return false;
       }
   }  
}

//class definition for game rounds
/*class Round {
    constructor(anagram,targetToDisplay,userInput,outputTarget, winScreen,loseScreen) {
        this.anagram = anagram;
        this.targetToDisplay = targetToDisplay;
        this.userInput = userInput;
        this.outputTarget = outputTarget;
    }
    cleanScreen(){
        $(this.targetToDisplay).empty();
        $(this.outputTarget).empty();
        $(this.userInput).val('');
        $(this.winScreen).removeClass('visible');
        $(this.loseScreen).removeClass('visible');
    } 
    displayAnagram() {
        let anagramWord = this.anagram.createAnagram();
        $(this.targetToDisplay).append(anagramWord);
    }   
    displayResult(){
    let valueToCompare = this.userInput.val();    
    let result = this.anagram.compareResult(valueToCompare);
    $(this.outputTarget).empty();
    if (result == true) {
        $(this.outputTarget).append('You win!');
        $(this.winScreen).addClass('visible');
        $(this.loseScreen).removeClass('visible');
    }
    else {
        $(this.outputTarget).append('Loser!');
        $(this.loseScreen).addClass('visible');
        $(this.winScreen).removeClass('visible');
    }
 }
}
*/
const anagram1 = new Anagram('Kira');
//const round1 = new Round(anagram1,'.anagram h2', '.answer input', '.output h3', '.win', '.lose');






/*function newGame() {
    cleanAnagram();
    displayAnagram(); 
    $('.answer').submit(function(){
        compareResult();
    });
}
$(document).ready(function(){   
  newGame(); 
  $('#refresh').click(function(){
        newGame(); 
    });   
})*/





