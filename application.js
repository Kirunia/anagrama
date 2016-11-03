$(document).ready(function(){
    let game1 = new Game();
    let round1 = game1.addNewRound();  
    $('.anagram h2').append(game1.currentRound.anagram.mixedWord);
    $('.score span').append(game1.gameScore);
    $('.answer').submit(function(){
        $('.anagram').addClass('hidden');
        $('.shuffle').addClass('hidden');
        let userInput = $('.answer input').val();
        let result = game1.currentRound.compareResult(userInput);        
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
        game1.gameScore = game1.gameScore + game1.currentRound.roundScore;
        $('.score span').empty();
        $('.score span').append(game1.gameScore);
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
        round1 = game1.addNewRound();
        $('.anagram h2').append(game1.currentRound.anagram.mixedWord);
        $('.score span').append(game1.gameScore);
    }); 
    $('#shuffle').click(function(){
        $('.anagram h2').empty();
        let shuffledWord = round1.reshuffleWord();
        game1.gameScore = game1.gameScore - 10;
        $('.score span').empty();
        $('.score span').append(game1.gameScore);
        $('.anagram h2').append(shuffledWord);
    });  
})






