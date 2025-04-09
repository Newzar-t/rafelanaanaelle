const sections = document.querySelectorAll('section');



function HighlightSection()
{
    let linknav = document.querySelectorAll('.link-navigation');

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            linknav.forEach((link) => link.classList.remove("active"));
            let activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
                }
            }
        });
    }, { threshold:0.3} );
    sections.forEach((section) => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', HighlightSection);

window.addEventListener('scroll', event =>
{
    let currentSection = document.querySelector('section.active');
}
)

function ShadowText(e)
{
    
    let but = e.target.closest("section"); 
    if (!but) return;

    const { width, height, left, top } = but.getBoundingClientRect();
    
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.clientX - left - centerX;
    const mouseY = e.clientY - top - centerY;

    const intensity = 15;
    
    let title = document.querySelectorAll(".title");

    title.forEach( v => 
    {
      v.style.textShadow = `${-mouseX / centerX * intensity}px ${-mouseY / centerY * intensity}px 0 rgba(107, 43, 0, 0.47)`;
    }

)

}

window.addEventListener('mousemove', event => ShadowText(event));

// Travaux script //

let works = [
    {
        title : "Websites",
        description : "Creation of websites using HTML, CSS and JS",
        image : "Images/portfoliocapture.png",
        link : "site.html",
    },
    {
        title : "Video games",
        description : "Creation of video games using Unity",
        image : "Images - starshipgame/startgameplay.png",
        link : "unity.html",
    },
    {
        title : "Vector watch",
        description : "Reproduction of a watch using Illustrator",
        image : "ImagesMontre/lpdlpdvl.png",
        link : "montre.html",
    },
    {
        title : "Webdesign internship",
        description : "Productions from my internship at Pepe Studio",
        image : "Images/1731897609668.jpeg",
        link : "pepe.html",
    },
    {
        title : "CD cover",
        description : "Creation of a CD cover for a fictionnal artist",
        image : "Images - PochetteCD/PochetteCDBowserandPeach.jpg",
        link : "maquette.html",
    },
    {
        title : "Modeling and animating a 3D scene",    
        description : "Creation of a 3D scene using Blender",
        image : "Images - blender/zedezdze.webp",
        link : "blender.html",
    },

]

const workGrid = document.querySelector(".work-grid");


function CreateWorkContent(w)
{
   let workDiv = document.createElement("div");
    workDiv.classList.add("work-element");
    workDiv.innerHTML = `
    <a href="${w.link}"><h2>${w.title}</h2>
    <h3>${w.description}</h3></a>
    `;
    
    workGrid.appendChild(workDiv);
}

function DisplayWorks()
{
    works.forEach( element => {
        
        CreateWorkContent(element)      
    }
);
}



DisplayWorks();


const workImagePreview = document.createElement("span");
workImagePreview.classList.add("work-element-image");
document.body.appendChild(workImagePreview); 


function WorkPreview(event) {
    let x = event.clientX;
    let y = event.clientY;

    let workTarget = event.target.closest(".work-element");
    if (!workTarget) {
        workImagePreview.style.display = "none";
        return;
    }

    let workIndex = Array.from(document.querySelectorAll(".work-element")).indexOf(workTarget);
    if (workIndex === -1 || !works[workIndex].image) return;

    workImagePreview.innerHTML = `<img src="${works[workIndex].image}" alt="preview de mon projet"/>`;
    workImagePreview.style.top = y + `px`;
    workImagePreview.style.left = x + `px`;
    workImagePreview.style.display = "block";
}

workGrid.addEventListener("mouseleave", () => workImagePreview.style.display = "none");
workGrid.addEventListener("mousemove", event => WorkPreview(event));

/* About me */

let movingSpan = document.querySelectorAll(".aboutme-title");


movingSpan.forEach( span => {
    span.addEventListener("mouseover", (event) => {
        let x = event.clientX;
        let y = event.clientY;

        let positionX = x - span.getBoundingClientRect().left - span.offsetWidth / 2;
        let positionY = y - span.getBoundingClientRect().top - span.offsetHeight / 2;
    
        span.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });

  
    });

    /* contact me*/

    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function BubbleMaker() {
        const bubbleSVG = document.createElement("span");
    
        bubbleSVG.innerHTML = `<svg width="71px" height="71px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1266 22.1995C16.7081 22.5979 17.4463 23.0228 18.3121 23.3511C19.9903 23.9874 21.244 24.0245 21.8236 23.9917C23.1167 23.9184 23.2907 23.0987 22.5972 22.0816C21.8054 20.9202 21.0425 19.6077 21.1179 18.1551C22.306 16.3983 23 14.2788 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C13.4578 23 14.8513 22.7159 16.1266 22.1995ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.3697 21 14.6654 20.6947 15.825 20.1494C16.1635 19.9902 16.5626 20.0332 16.8594 20.261C17.3824 20.6624 18.1239 21.1407 19.0212 21.481C19.4111 21.6288 19.7674 21.7356 20.0856 21.8123C19.7532 21.2051 19.4167 20.4818 19.2616 19.8011C19.1018 19.0998 18.8622 17.8782 19.328 17.2262C20.3808 15.7531 21 13.9503 21 12C21 7.02944 16.9706 3 12 3Z" fill="#7a4343"></path>
        </svg>`;
    
        bubbleSVG.classList.add("bubble");
    
        bubbleSVG.style.position = "absolute";
        bubbleSVG.style.left = `${Math.random() * window.innerWidth}px`;


        bubbleSVG.style.pointerEvents = "none"; 
    
        document.querySelector("#bubble-main").appendChild(bubbleSVG); 
        setTimeout(() => {
            setTimeout(() => bubbleSVG.remove());
        }, 3000);
    }
    

    setInterval(BubbleMaker, 3000);

      function ShowNumber(){
        let button = document.getElementById("phonebutton");
        button.innerHTML ='';
        button.innerHTML += "07 83 69 92 93"
    }

    const url = "CV_RafelanaAnaelle_DeveloppeuseFront.pdf";
    const filename = "CV_RafelanaAnaelle_DeveloppeuseFront.pdf";

    function GetResume()
    {
       

        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    


   

  


    




