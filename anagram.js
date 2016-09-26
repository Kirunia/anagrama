let wordsList = ["mleko", "doniczka", "komputer", "chusteczki", "nocnik", "koszula", "inwestygacja","algorytm", "dupa", "dziunia", "smoczek", "papierosy","wiosna"];

function pickWord() {
        let initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
        return initialWord;
    }
function pickRandomNumber(rangeStart, rangeEnd) {
    let randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
}    
//class definition for an anagram
class Anagram {
    constructor(initialWord){         
        this.initialWord = initialWord;        
        this.letters = [];
    }    
    mixLetters() {
    for (let j = 0; j < this.letters.length; j++) {
        let letterToReplace = this.letters[j];
        let randomNumber = pickRandomNumber(j + 1, this.letters.length);
        let letterToReplaceWith = this.letters[randomNumber];
        this.letters[j] = letterToReplaceWith;
        this.letters[randomNumber] = letterToReplace;             
        }  
    }
    createAnagram(){ 
       this.letters = [];           
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

$(document).ready(function(){
    let anagram1 = new Anagram(pickWord());
    $('.anagram h2').append(anagram1.createAnagram());
    $('.answer').submit(function(){
        $('.anagram').addClass('hidden');
        let userInput = $('.answer input').val();
        let result = anagram1.compareResult(userInput);
        if (result == true) {            
            $('.win').addClass('visible');
            $('.lose').removeClass('visible');
            $('.output h3').append('You win!');
        }
        else {
            $('.win').removeClass('visible');
            $('.lose').addClass('visible');
            $('.output h3').append('Loser!');
        }
    });
    $('#refresh').click(function(){
        $('.win').removeClass('visible');
        $('.lose').removeClass('visible');
        $('.anagram').removeClass('hidden');
        $('.answer input').val('');
        $('.anagram h2').empty();
        $('.output h3').empty();
        anagram1 = new Anagram(pickWord());
        $('.anagram h2').append(anagram1.createAnagram());
    }); 
    $('#shuffle').click(function(){
        $('.anagram h2').empty();
        let shuffledWord = anagram1.createAnagram();
        $('.anagram h2').append(shuffledWord);
    });  
})






