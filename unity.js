let games = 
[
    {
        name : "What are the benefits of video games",
        description : "For a school project, I conceived a video game based on storytelling to depict the positive aspects of playing games. We incorporated small elements of gameplay to present benefits such as stimulating reflection, creativity, and sharing. Using interactive panels, we present different video games based on what the user may like. It was a very fun project and a great way to learn new skills!",
        previewImage : ["Images-Unity/falsebridge.mp4","Images-Unity/enigme1.png","Images-Unity/movingv.png","Images-Unity/menupause.png"],
        link:"https://youtu.be/bLmZVTY3gGg?si=Dvss0ut2rU16Vpk2",
    },
    {
        name : "Space Survivor",
        description : "To continue my Unity journey, I created a small and simple game in two weeks: a space shooting game. The gameplay is classic: you are a spaceship and must survive by shooting asteroids, avoiding obstacles, and managing your bullet inventory and health. It was fun and a very good challenge to undertake! ",
        previewImage : ["Images - starshipgame/Gameplay2.mp4","Images - starshipgame/gameplayvide.png","Images - starshipgame/RAYCAST.png", "Images - starshipgame/menuprinicpal.png"],
        link:"https://youtu.be/IdH9Cp8A8Go?si=RoUrJ7MEYdiNqtMz",
    }
]

const main = document.querySelector("main");

function CreateProject(element)
{
 let workContent = document.createElement("div");
 workContent.classList.add("work");

 workContent.innerHTML = `
  <h3>${element.name}</h3>
        <p>${element.description}</p>
        <div class="image-grid">
            <video autoplay muted looped src="${element.previewImage[0]}" alt="PortfolioImages"></video>
            <img src="${element.previewImage[1]}"/>
            <img src="${element.previewImage[2]}" alt="PortfolioImages"/>
            <img src="${element.previewImage[3]}"/>
            <button class="btn"><a href="${element.link}">Gameplay on Youtube</a></button>
        </div>
 `

 main.appendChild(workContent);
}


games.forEach(element => CreateProject(element));