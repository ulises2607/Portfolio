const works = document.querySelector('.recent-works');
// console.log("Children de main", main.children[0]);

const divMultPost = document.createElement('div');
divMultPost.className = 'container';
works.appendChild(divMultPost);

const projects = [
  {
    id: 0,
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.`,
    image: 'Images/Work/Work-img-1.png',
    technology: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    source: '',
    live: '',
  },
  {
    id: 1,
    name: 'Profesional Art Printing Data 1',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: 'Images/Work/Work-img-1.png',
    technology: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Profesional Art Printing Data 2',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: '',
    technology: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
  },
  {
    id: 3,
    name: 'Profesional Art Printing Data 3',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: '',
    technology: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    name: 'Profesional Art Printing Data 4',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: '',
    technology: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    name: 'Profesional Art Printing Data 5',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: '',
    technology: ['HTML', 'CSS3', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Profesional Art Printing Data 6 ',
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. Has been the industry's standard.`,
    image: '',
    technology: ['HTML', 'CSS', 'JavaScript'],
  },
];

console.log(projects);

//Firt card

// Cards Creation
let createCards = () => {
  const cardContainer = document.querySelector('.card-container');
  const mainCard = document.querySelector('.container')

  projects.forEach((element) => {

    if (element.id === 0) {
      mainCard.innerHTML += `
      <img
      class="img-work"
      src="${element.image}"
      alt="Multi-post-stories"
    />

    <div class="mult-post">
      <h3>${element.name}</h3>

      <p>
        ${element.description}
      </p>

      <ul class="tech">
        <li class="tech-btn"><a class="a-tech" href="#">CSS</a></li>
        <li class="tech-btn"><a class="a-tech" href="#">HTML</a></li>
        <li class="tech-btn"><a class="a-tech" href="#">Bootstrap</a></li>
        <li class="tech-btn"><a class="a-tech" href="#">Ruby</a></li>
      </ul>

      <a href="#" id=${element.id} class="btn-works-1 seeProject">See Projects</a>
    </div>
  </div>
      `
    } else {
      cardContainer.innerHTML += `
    <div class="card card-${element.id}">
      <h4 class="card-title">${element.name}</h4>
      <article class="card-description">
        ${element.description}
      </article>
      <ul class="card-lang">
        <li>HTML</li>
        <li>CSS</li>
        <li>Ruby</li>
      </ul>
      <a href="#" id=${element.id} class="btn-works seeProject">See Project</a>
    </div>
    `
    }

    
  })
}

function modalButton() {

}


function createModal() {
  const detailSection = document.querySelector('.detailSection');
  const page = document.querySelector('.page')
  
  document.querySelectorAll('.seeProject').forEach((n) => 
  n.addEventListener('click', () => {
    console.log(n);
    let itemId = n.id
    const projSelect = projects[itemId]
    console.log(projSelect);
    detailSection.innerHTML = `
    <div class="details ">
      <div class="modal-heading">
        <div class="title-modal">
          <h2 class="titl-mod-mob" >${projSelect.name}</h2>
          <h2 class="tit-mod-desk">Keeping track of hundreds of components website</h2>
          <buttton class="close-modal-btn">
            <i class="bi bi-x-lg"></i>
          </buttton>
        </div>
        <ul class="modals-tech">
          <li>HTML</li>
          <li>Bootstrap</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>
      <div class="body-modal">
        <img class="img-modal" src="${projSelect.image}" alt="">
        <div class="descrip-modal">
          <div class="p-descript">
            <article>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essent
            </article>
            <article class="art-dk">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essent
            </article>
          </div>
          <div class="descript-btn">
            <button>
              <a class="modal-btn" href="#">See Live</a><img class="modal-btn" src="./Images/Icon - Export.svg" alt="Export">
            </button>
            <button>
              <a class="modal-btn" href="https://github.com/ulises2607/Portfolio">See Source</a> <img class="modal-btn" src="./Images/Work/Frame.png"
                alt="Frame">
            </button>
          </div>
        </div>
      </div>
    </div>
    `
    detailSection.style.display = 'inline-flex';
    page.style.filter = 'blur(10px)';
    const X = document.querySelector('.close-modal-btn');
    function disappear() {
    detailSection.style.display = 'none';
    page.style.filter = 'blur(0px)';
    }
    X.addEventListener('click', disappear);
  }));
}

createCards()
createModal()






// POPUP SECTION
// const detailSection = document.querySelector('.detailSection');
// const X = document.querySelector('.close-modal-btn');
// const page = document.querySelector('.page');

// document.querySelectorAll('.seeProject').forEach((n) => n.addEventListener('click', () => {
//   detailSection.style.display = 'inline-flex';
//   page.style.filter = 'blur(10px)';
// }));

// function disappear() {
//   detailSection.style.display = 'none';
//   page.style.filter = 'blur(0px)';
// }
// X.addEventListener('click', disappear);

// function disappearPage(event) {
//   if (event.target.className === 'detailSection') {
//     detailSection.style.display = 'none';
//     page.style.filter = 'blur(0px)';
//   }
// }
// detailSection.addEventListener('click', disappearPage);

//              EMAIL VALIDATION

const form = document.querySelector('.c-form');
const email = document.querySelector('#user_email');
const errorMessage = document.createElement('span');
errorMessage.innerHTML = '* Your email should be in lower case';
errorMessage.classList.add('errorMessage');

form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    form.appendChild(errorMessage);
  }
});
