var wordsList = ["mleko", "doniczka", "komputer", "filiżanka"]

/*function Game(){
   this.createAnagram = createAnagram();
   this.displayAnagram = displayAnagram();
   //this.compare = compare();   
}

var game1 = new Game();*/
var letters = [];

function pickRandomNumber(rangeStart, rangeEnd) {
    var randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
}
function mixLetters() {
    for (j = 0; j < letters.length; j++) {
        var letterToReplace = letters[j];
        var randomNumber = pickRandomNumber(j, letters.length);
        var letterToReplaceWith = letters[randomNumber];
        letters[j] = letterToReplaceWith;
        letters[randomNumber] = letterToReplace;             
        }  
}
function createAnagram(){
       var word = wordsList[Math.floor(Math.random() * wordsList.length)];       
       for (i = 0; i < word.length; i++) {
          letters.push(word[i]);                     
       }; 
       mixLetters(); 
       selectedWord = letters.join('');
       return selectedWord;                 
   }
function displayAnagram(){
         var selectedWord = createAnagram();
         $('.anagram').append(selectedWord);    
}
$(document).ready(function(){   
   displayAnagram(); 
})





