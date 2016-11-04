let wordsList = ["milk", "lion", "hope", "rope"];

function pickWord() {
    let initialWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
    return initialWord;
}

function pickRandomNumber(rangeStart, rangeEnd) {
    let randomNumber = rangeStart + Math.floor(Math.random() * (rangeEnd - (rangeStart + 1)));
    return randomNumber;
}

function showEndRoundScreen(elToShow, elToHide, message){
    $(elToShow).addClass('visible');
    $(elToHide).removeClass('visible');
    $('.output h3').append(message);
}
function clearUi(){
    $('.win').removeClass('visible');
        $('.lose').removeClass('visible');
        $('.anagram').removeClass('hidden');
        $('.shuffle').removeClass('hidden');
        $('.answer input').val('');
        $('.anagram h2').empty();
        $('.output h3').empty();
        $('.score span').empty();        
}