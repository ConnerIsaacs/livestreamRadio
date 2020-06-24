parseID = stationURL => stationURL.substr(stationURL.indexOf("=")+1);

createSource = stationID => "https://www.youtube.com/embed/" + stationID + "?autoplay=1";
getImageSource = stationID => "https://img.youtube.com/vi/" + stationID + "/sddefault.jpg";

function appendIFrame(parent, stationName, stationID){  
    //clear the iframe container so that there's never more than one iframe in the current stream div
    document.getElementById("currentStream__container").innerHTML = "";
    //Create a new iframe
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm'); // assign an id
    // assign url
    ifrm.setAttribute('allow', "autoplay");
    ifrm.setAttribute('src', createSource(stationID));
    ifrm.setAttribute('class', 'currentStream__iframe');

    parent.appendChild(ifrm);
}

function addStationSubmitClick(){
    let stationName = document.getElementById("stationName").value;
    let stationID = parseID(document.getElementById("stationURL").value);
    //If no stream text is displaying, delete it
    if(document.getElementById("noCurrentStream")){
        document.getElementById("noCurrentStream").remove();
    }

    //If there was no streams in the set before, get rid of the text
    if(document.getElementById("noSetLoaded")){
        document.getElementById("noSetLoaded").remove();
    }

    //Append a new iframe and create a thumbnail for the stream
    appendIFrame(document.getElementById("currentStream__container"), stationName, stationID);
    addStreamCard(document.getElementById("loadedSet"), stationName, stationID);
    updateFooterImage(document.getElementsByClassName('footer__imageContainer')[0], stationID, stationName);

    //Reset the text input values so that they don't remain next time the modal is brought up
    document.getElementById("stationName").value = "";
    document.getElementById("stationURL").value = "";
}

function updateFooterImage(parent, stationID, stationName) {
    //Clear original image
    parent.innerHTML = "";

    //Create new image
    let image = document.createElement('img');
    image.setAttribute('src', getImageSource(stationID));
    image.setAttribute('class', 'footer__image');

    //Set stream name to new stream name
    document.getElementsByClassName('footer__streamName')[0].innerHTML = stationName;

    //Append new image
    parent.appendChild(image);
}

function addStreamCard(parent, stationName, stationID){

    //Get the link for the thumbnail's image
    let thumbnailImage = getImageSource(stationID);

    //Create thumbnail element
    let thumbnail = document.createElement("div");
    thumbnail.setAttribute('class', 'streamThumbnail');
    thumbnail.setAttribute('id', stationID);
    thumbnail.innerHTML = `<img src= "${thumbnailImage}" class="streamThumbnail__image">
                            <div class="streamThumbnail__name">
                                <p>${stationName}</p>
                            </div>`;

    //Add the event that stream changes when thumbnail is clicked (u)
    thumbnail.addEventListener("click", (event)=>{
        appendIFrame(document.getElementById("currentStream__container"), stationName, stationID);
        updateFooterImage(document.getElementsByClassName('footer__imageContainer')[0], stationID, stationName);
    });
    parent.appendChild(thumbnail);
}

document.getElementsByClassName("modal__submitButton")[0].addEventListener("click", addStationSubmitClick);