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
    replayAnagram() {
        this.reshuffleCounter = 0;
        this.roundScore = 0;
        let mixedWord = this.anagram.createAnagram();
        return mixedWord;
    }
    calculateRoundScore(){
        this.roundScore = this.roundScore + this.answerScore - this.reshuffleCounter * 10;
        return this.roundScore;
    }
}

$(document).ready(function(){
    let anagram1 = new Anagram(pickWord());
    let round1 = new Round(anagram1);
    let score = 0;
    round1.roundScore = 0;
    round1.answerScore = 0;    
    $('.anagram h2').append(anagram1.createAnagram());
    $('.answer').submit(function(){
        $('.anagram').addClass('hidden');
        $('.shuffle').addClass('hidden');
        let userInput = $('.answer input').val();
        let result = round1.calculateResult(userInput);        
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
        score = score + round1.calculateRoundScore();
    });
    $('#refresh').click(function(){
        score = 0;
        $('.win').removeClass('visible');
        $('.lose').removeClass('visible');
        $('.anagram').removeClass('hidden');
        $('.shuffle').removeClass('hidden');
        $('.answer input').val('');
        $('.anagram h2').empty();
        $('.output h3').empty();
        anagram1 = new Anagram(pickWord());
        round1 = new Round(anagram1);
        $('.anagram h2').append(round1.replayAnagram());
    }); 
    $('#shuffle').click(function(){
        $('.anagram h2').empty();
        let shuffledWord = round1.reshuffleWord();
        score = score + round1.calculateRoundScore();
        $('.anagram h2').append(shuffledWord);
    });  
})






