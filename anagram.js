var wordsList = ["mleko", "doniczka", "komputer", "chusteczki", "nocnik", "koszula", "inwestygacja","algorytm", "dupa", "dziunia", "smoczek", "papierosy","wiosna"];
// game definitions
class Game {
    constructor(initialWord) {
        this.initialWord = initialWord;
    }
    pickWord() {
        this.initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
        return initialWord;
    }
}
//class definition for an anagram
class Anagram {
    constructor(wordToMix){         
        this.wordToMix = wordToMix;
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
    createAnagram(wordToMix){             
       for (let initialLetter of this.wordToMix) {
          this.letters.push(initialLetter);                     
       }; 
       this.mixLetters(); 
       let mixedWord = this.letters.join('');
       return mixedWord;                 
   }   
}
//class definition for game rounds
class Round {
    constructor(initialWord, mixedWord, targetToDisplay, userInput, outputTarget, winScreen, loseScreen) {
        this.initialWord = initialWord;
        this.mixedWord = mixedWord;
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
    compareResult(){
    let userInputValue = this.userInput.val();
    $(this.outputTarget).empty();
    if (userInputValue == initialWord) {
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
 displayAnagram(){     
     $(this.targetToDisplay).append(mixedWord);
    }
}


const game1 = new Game();
const anagram1 = new Anagram(game1.pickWord());
const round1 = new Round(game1.pickWord(), anagram1.createAnagram() , '.answer input', '.output h3', '.win', '.lose');








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






