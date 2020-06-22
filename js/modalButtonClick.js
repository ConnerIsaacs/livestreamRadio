function createSource(str){
    //https://www.youtube.com/watch?v=5qap5aO4i9A
    let a = str.substr(str.indexOf("=")+1);
    return "https://www.youtube.com/embed/" + a;
}

function appendIFrame(parent, stationName, stationURL){
    //If no stream text is displaying, delete it
    if(document.getElementById("noCurrentStream")){
        document.getElementById("noCurrentStream").remove();
    }

    //clear the iframe container so that there's never more than one iframe in the current stream div
    document.getElementById("currentStream__container").innerHTML = "";

    //Create a new iframe
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm'); // assign an id
    parent.appendChild(ifrm);
    // assign url
    ifrm.setAttribute('src', createSource(stationURL));
    ifrm.setAttribute('class', 'currentStream__iframe');
}

function addStationSubmitClick(){
    let stationName = document.getElementById("stationName").value;
    let stationURL = document.getElementById("stationURL").value;
    
    appendIFrame(document.getElementById("currentStream__container"), stationName, stationURL);
}

document.getElementsByClassName("modal__submitButton")[0].addEventListener("click", addStationSubmitClick);