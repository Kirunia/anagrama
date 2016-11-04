$(document).ready(function(){
    let game1 = new Game();
    let round1 = game1.addNewRound();  
    $('.anagram h2').append(game1.currentRound.anagram.mixedWord);
    $('.score span').append(game1.gameScore);
    $('.answer').submit(function(){
        $('.anagram').addClass('hidden');
        $('.shuffle').addClass('hidden');
        let userInput = $('.answer input').val();
        game1.endRound(userInput);                
        if (game1.roundResult) {  
            showEndRoundScreen('.win','.lose', 'You win!')
        }
        else {
            showEndRoundScreen('.lose','.win','Loser!')
        }        
        $('.score span').empty();
        $('.score span').append(game1.gameScore);
    });
    $('#refresh').click(function(){        
        clearUi();
        round1 = game1.addNewRound();
        $('.anagram h2').append(game1.currentRound.anagram.mixedWord);
        $('.score span').append(game1.gameScore);
    }); 
    $('#shuffle').click(function(){
        $('.anagram h2').empty();
        let shuffledWord = round1.reshuffleWord();
        game1.updateGameScore();
        $('.score span').empty();
        $('.score span').append(game1.currentScore);
        $('.anagram h2').append(shuffledWord);
    });  
})






