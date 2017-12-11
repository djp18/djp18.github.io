function ease(){
var easy = new Audio("https://soundbible.com/mp3/Smack-SoundBible.com-1427823671.mp3");
easy.play();
}

$("#easy").on("click",ease);

$(document).keypress(key);

function key (event)
{
    console.log(event.charCode);
}