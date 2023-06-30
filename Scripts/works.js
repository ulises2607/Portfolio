const works = document.querySelector(".recent-works");
// console.log("Children de main", main.children[0]);

const divMultPost = document.createElement("div");
divMultPost.className = "container";
works.appendChild(divMultPost);

const projects = [
  {
    id: 0,
    name: "Multi-Post Stories",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    image: "Images/Work/Work-img-1.png",
    technology: ["CSS", "HTML", "Bootstrap", "Ruby"],
    source: "",
    live: "",
  },
  {
    id: 1,
    name: "Profesional Art Printing Data 1",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Profesional Art Printing Data 2",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS", "JavaScript", "Ruby"],
  },
  {
    id: 3,
    name: "Profesional Art Printing Data 3",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    name: "Profesional Art Printing Data 4",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    name: "Profesional Art Printing Data 5",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS3", "JavaScript"],
  },
  {
    id: 6,
    name: "Profesional Art Printing Data 6 ",
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: "",
    technology: ["HTML", "CSS", "JavaScript"],
  },
];

console.log(projects);

// Code to generate the projects dinamicaly

// function generateProjects() {
//   let techListMP = '';

//   projects[0].technology.forEach((tech) => {
//     techListMP += `<li class="tech-btn"><a class="a-tech" href="#">${tech}</a></li>`;
//   });

//   divMultPost.innerHTML = `<img
//   class="img-work"
//   src="${projects[0].image}"
//   alt="Multi-post-stories"
//   />

//   <div class="mult-post">
//   <h3>${projects[0].name}</h3>

//   <p>${projects[0].description}</p>

//   <ul class="tech">
//     ${techListMP}
//   </ul>
//   <a href="" class="btn-works-1 seeProject">See Projects</a>
//   </div>`;

//   const divCards = document.createElement('div');
//   divCards.classList.add('card-container');
//   works.appendChild(divCards);

//   let techLang = '';

//   for (let e = 1; e < projects.length; e++) {
//     techLang = '';
//     projects[e].technology.forEach((tech) => {
//       techLang += `<li>${tech}</li>`;
//     });
//     divCards.innerHTML += `
//     <div class="card card-${projects[e].id}">
//         <h4 class="card-title">${projects[e].name}</h4>
//         <article class="card-description">
//           ${projects[e].description}
//         </article>
//         <ul class="card-lang">
//             ${techLang}
//         </ul>
//         <a href="#" class="btn-works seeProject">See Project</a>
//       </div>
//     `;
//   }
// }
// window.addEventListener('load', generateProjects());

// POPUP SECTION
const detailSection = document.querySelector(".detailSection");
const X = document.querySelector(".close-modal-btn");
const page = document.querySelector(".page");

document.querySelectorAll(".seeProject").forEach((n) =>
  n.addEventListener("click", () => {
    detailSection.style.display = "inline-flex";
    page.style.filter = "blur(10px)";
  })
);

function disappear() {
  detailSection.style.display = "none";
  page.style.filter = "blur(0px)";
}
X.addEventListener("click", disappear);

function disappearPage(event) {
  if (event.target.className === "detailSection") {
    detailSection.style.display = "none";
    page.style.filter = "blur(0px)";
  }
}
detailSection.addEventListener("click", disappearPage);

//              EMAIL VALIDATION

const form = document.querySelector(".c-form");
const email = document.querySelector("#user_email");
const errorMessage = document.createElement("span");
errorMessage.innerHTML = "* Your email should be in lower case";
errorMessage.classList.add("errorMessage");

form.addEventListener("submit", (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    form.appendChild(errorMessage);
  }
});
