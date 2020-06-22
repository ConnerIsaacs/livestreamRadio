document.getElementById("navigation__link--2").addEventListener("click", fadeOutStreams);

function fadeOutStreams(){
    document.getElementById("streamsView").style.animation = ".5s fadeOutToRight ease-in-out forwards";
}