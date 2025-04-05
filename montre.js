let myWatch = "ImagesMontre/MontreTagHeuerMyWatch.png";
let referenceWatch = "ImagesMontre/MontreTagHeuerReference.png";

let isMyWatchOnScreen = true;

const container = document.querySelector("main");
const button = document.querySelector("button");

function DisplayWatchImage()
{
    if(isMyWatchOnScreen == true)
    {
        container.innerHTML = "";
        container.innerHTML += `
        <img src="${myWatch}" alt="My Watch made on Illustrator"/>
        `

        button.innerHTML = "";
        button.innerHTML += `Show reference ! `;

        isMyWatchOnScreen = false;
    }
    else if(isMyWatchOnScreen === false)
    {
        container.innerHTML = "";
        container.innerHTML += `
        <img src="${referenceWatch}" alt="My Watch made on Illustrator"/>
        `
        button.innerHTML = "";
        button.innerHTML += `Show my watch ! `;
        isMyWatchOnScreen = true;

    }
    else{
        return;
    }
}

DisplayWatchImage()