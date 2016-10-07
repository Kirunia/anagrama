$(document).ready(function(){
    let anagram1 = new Anagram(pickWord());
    let round1 = new Round(anagram1);
    let gameScore = 0;      
    $('.anagram h2').append(round1.refreshAnagram());
    $('.score span').append(gameScore);
    $('.answer').submit(function(){
        $('.anagram').addClass('hidden');
        $('.shuffle').addClass('hidden');
        let userInput = $('.answer input').val();
        let result = round1.compareResult(userInput);        
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
        gameScore = gameScore + round1.roundScore;
        $('.score span').empty();
        $('.score span').append(gameScore);
    });
    $('#refresh').click(function(){        
        $('.win').removeClass('visible');
        $('.lose').removeClass('visible');
        $('.anagram').removeClass('hidden');
        $('.shuffle').removeClass('hidden');
        $('.answer input').val('');
        $('.anagram h2').empty();
        $('.output h3').empty();
        $('.score span').empty();
        anagram1 = new Anagram(pickWord());
        round1 = new Round(anagram1);
        $('.anagram h2').append(round1.refreshAnagram());
        $('.score span').append(gameScore);
    }); 
    $('#shuffle').click(function(){
        $('.anagram h2').empty();
        let shuffledWord = round1.reshuffleWord();
        gameScore = gameScore - 10;
        $('.score span').empty();
        $('.score span').append(gameScore);
        $('.anagram h2').append(shuffledWord);
    });  
})






