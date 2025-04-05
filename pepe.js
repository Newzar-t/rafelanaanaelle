let productions = [
    {
        name : "Booklet",
        description : "I created a booklet for an association supporting children with disabilities and/or illnesses, working directly with the president of Luce&All. She provided the text, images, and key elements she wanted included. I then designed the booklet in Figma based on her brief, while adding some of my own creative ideas.",
        logiciel : "Figma",
        images : ["Images - PepeStudio/pagederriere.jpg","Images - PepeStudio/pageavantprincipaleversionfinale.jpg","Images - PepeStudio/unnamed.jpg"],
    },
    {
        name : "Interface design",
        description : "For an emailing project, I designed a new interface for the company's website, based on its visual identity. I used Figma and really enjoyed imagining how the layout and components would look. I also used free assets from Freepik for illustrations.",
        logiciel : "Figma",
        images : ["Images - PepeStudio/ikykyukyu.png","Images - PepeStudio/tytytty.png","Images - PepeStudio/gfsfese.png"],
    },
    {
        name : "Web Integration",
        description : "To help maintain the website, I quickly learned how to do web integration. I contributed by adding text, banners, and other elements to the site, and publishing updates online.",
        logiciel : "Webflow",
        images : ["Images - PepeStudio/integrationwebflowblog.png","Images - PepeStudio/integrationwebflowbanner.png","Images - PepeStudio/integrationwebflowavis.png"],
    },
    {
        name : "Graphic design",
        description : "I also created content for social media, especially for LinkedIn, following the company’s graphic guidelines. Additionally, I designed several banners using Photoshop.",
        logiciel : "Canva, Photoshop",
        images : ["Images - PepeStudio/trtrtrt.png","Images - PepeStudio/yjtyjtyjt.jpeg","Images - PepeStudio/yutyutyu.png"],
    }
    

]

const container = document.querySelector("main");

const gridcontainer = document.createElement("div");
gridcontainer.classList.add("work-display");
container.appendChild(gridcontainer);

let urlSpan = "Images - mkfr/jsjsjsfks.jpg";

function ProjectGrid(project)
{
    
    
  gridcontainer.innerHTML += `
    <h2>${project.name}</h2>
    <h3>${project.logiciel}</h3>

    <p>${project.description}</p>
          
        <div class="grid">
            <span class="img-on-screen"></span>
            <img class="pepe-image" src="${project.images[0]}"/><img class="pepe-image" src="${project.images[1]}"/><img class="pepe-image" src="${project.images[2]}"/>
        </div>
       </div>

  `
}

  ////

  function GridImageSelector() {
    document.querySelectorAll(".grid").forEach(workDisplay => {
        let containerImg = workDisplay.querySelector(".img-on-screen");
        containerImg.innerHTML = `<img src="${workDisplay.querySelector(".pepe-image").src}"/>"`

        workDisplay.querySelectorAll(".pepe-image").forEach(image => {
            image.addEventListener("click", function () {
                containerImg.innerHTML = `<img src="${this.src}" />`; 
            });
        });
    });
}



function DisplayProjects()
{
    productions.forEach(element => ProjectGrid(element));
}

DisplayProjects();
GridImageSelector();



