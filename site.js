let sites = 
[
    {
        name : "Current Portfolio",
        description : "My newest portfolio : After receiving advices about interactivity and design, I remade a portfolio designed to be interactive, simple and a little fun to depict my personnality ! ",
        previewImage : ["Images/portfolioworks.png","Images/portfoliomyvision.png"],
        link:"index.html",
    },
    {
        name : "Game Card",
        description : "A school project : Creating a website using list in Javascript to generate card and make it look like a game, please don't pay attention to the subject.",
        previewImage : ["Images - GameCard/Nextmosaique.png","Images - GameCard/nextothercarrousel.png"],
        link:"https://newzar-t.github.io/GameCard/",
    },
    {
        name : "A Perfume landing page",
        description : "A simple landing page I create to train in JS, for Fragonnard but it was purely fictionnal !  Even so, Fragonnard, if you pass here, I love your perfume so let's work together ! No ?",
        previewImage : ["Images/siteperfumepreview1.png","Images/siteperfumepreview2.png"],
        link:"https://newzar-t.github.io/SitePerfumeRococo/",
    },
    {
        name : "Old Portfolio",
        description : "My first portfolio : it was one of my fisrt big project and the first website I put online. The design isn't great but it's a way to see how far I come !",
        previewImage : ["Images/oldportfoliopreview1.png","Images/oldportfoliopreview2.png"],
        link:"https://newzar-t.github.io/Portfolio_Newzar/",
    },
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
            <img src="${element.previewImage[0]}" alt="PortfolioImages"/>
            <img src="${element.previewImage[1]}"/>
            <button class="btn"><a href="${element.link}">See it online !</a></button>
        </div>
 `

 main.appendChild(workContent);
}


sites.forEach(element => CreateProject(element));

