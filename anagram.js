var wordsList = ["herbata", "żelazko", "matematyka", "tyczka", "kocur", "rzepa", "homologacja", "hemoglobina"]; 
//["mleko", "doniczka", "komputer", "chusteczki", "nocnik", "koszula", "inwestygacja","algorytm", "dupa", "dziunia", "smoczek", "papierosy","wiosna"];
var letters = [];
var word;

function pickRandomNumber(rangeStart, rangeEnd) {
    var randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
}
function mixLetters() {
    for (j = 0; j < letters.length; j++) {
        var letterToReplace = letters[j];
        var randomNumber = pickRandomNumber(j + 1, letters.length);
        var letterToReplaceWith = letters[randomNumber];
        letters[j] = letterToReplaceWith;
        letters[randomNumber] = letterToReplace;             
        }  
}
function createAnagram(){
       word = wordsList[Math.floor(Math.random() * wordsList.length)];       
       for (i = 0; i < word.length; i++) {
          letters.push(word[i]);                     
       }; 
       mixLetters(); 
       selectedWord = letters.join('');
       return selectedWord;                 
   }
function displayAnagram(){
         var selectedWord = createAnagram();
         $('.anagram h2').append(selectedWord);    
}
function compareResult(){
    var userInput = $('.answer input').val();
    $('.output h3').empty();
    if (userInput == word) {
        $('.output h3').append('You win!');
        $('.win').addClass('visible');
        $('.lose').removeClass('visible');
    }
    else {
        $('.output h3').append('Loser!');
        $('.lose').addClass('visible');
        $('.win').removeClass('visible');
    }
}
function cleanAnagram(){
    $('.anagram h2').empty();
    $('.output h3').empty();
    $('.answer input').val('');
    $('.win').removeClass('visible');
    $('.lose').removeClass('visible');
    word = '';
    letters= [];
}
function newGame() {
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
})






