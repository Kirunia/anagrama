var wordsList = ["mleko", "doniczka", "komputer", "chusteczki", "nocnik", "koszula", "inwestygacja","algorytm", "dupa", "dziunia", "smoczek", "papierosy","wiosna"];


//class definition for an anagram
class Anagram {
    constructor(word){         
        this.word = word;
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
       this.word = wordsList[Math.floor(Math.random() * wordsList.length)];       
       for (let initialLetter of this.word) {
          this.letters.push(initialLetter);                     
       }; 
       this.mixLetters(); 
       let selectedWord = this.letters.join('');
       return selectedWord;                 
   }   
}

//class definition for game rounds
class Round {
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
    compareResult(){
    let userInputValue = this.userInput.val();
    $(this.outputTarget).empty();
    if (userInputValue == word) {
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

const anagram1 = new Anagram()
const round1 = new Round();






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






