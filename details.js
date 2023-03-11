const card = document.querySelector('.page-1');

const popUpArray = [
  {
    id: 1,
    name: 'Project 1',
    description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  }, {
    id: 2,
    name: 'Project 2',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  }, {
    id: 3,
    name: 'Project 3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  }, {
    id: 4,
    name: 'Project 4',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  }, {
    id: 5,
    name: 'Project 5',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  }, {
    id: 6,
    name: 'Project 6',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consequatur eaque animi magni eum accusantium earum iste consequuntur illo maiores, molestiae ad quam amet vero, repudiandae similique nostrum porro doloribus modi natus et id ut voluptates odit. Consectetur voluptates minus sed, voluptatibus, cumque obcaecati vel veniam dicta vitae temporibus consequuntur?',
    image: './Images/Snapshoot Portfolio desktop.png',
    technologies: ['Ruby on Rails', 'css', 'JavaScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    liveLink: 'See live',
    sourceLink: 'See source',
  },
];

function buildCard(inputs) {
  inputs.forEach((input) => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.innerHTML = `
    <div class="grid1">
    </div>
    <div class="grid2">
     <br>
    <h2>
        ${input.name}
    </h2>
     <br>
    <ul>
        <li> ${input.technologies[0]} </li>
        <li> ${input.technologies[1]}</li>
        <li> ${input.technologies[2]}</li>
        <li> ${input.technologies[3]}</li>
    </ul>
    <br>
    <button data-target="pop-${input.id}" onClick ="showPopUp(this)" class= "project-btn">See Project</button>
    <br>
    </div>
    `;
    card.appendChild(grid);
  });
}

function popUpCard(inputs) {
  inputs.forEach((input) => {
    const pop = document.createElement('div');
    pop.classList.add('pop-container');
    pop.classList.add('pop-hidden');
    pop.id = `pop-${input.id}`;
    pop.innerHTML = `
      <div class="close-pop">
        <img src="./Images/Icon close.png" alt="close"  onclick="closePopUp('pop-${input.id}')">
      </div>
      <div class="pop-bg" style="background-image: url('${input.image}');"></div>
      <div class="pop-head">
            <h2>${input.name}</h2>
      </div>
      <div class="pop-btn">
        <a href="${input.liveLink}">
            See Live
            <img src="./Images/see live icon.png" alt="">
        </a>
        <a href="${input.sourceLink}">
            See Source
            <img src="./Images/Vector git.png" alt="">
        </a>
       </div>
      <ul>
          <li class="small"> ${input.technologies[0]} </li>
          <li class="small"> ${input.technologies[1]}</li>
          <li class="small"> ${input.technologies[2]}</li>
          <li class="big"> ${input.technologies[3]}</li>
          <li class="big"> ${input.technologies[4]} </li>
          <li class="big"> ${input.technologies[5]}</li>
          <li class="big"> ${input.technologies[6]}</li>
          <li class="big"> ${input.technologies[7]}</li>
      </ul>
      <div class="pop-body">
        <p>
         ${input.description}
        </p>
      </div>
      `;
    document.body.appendChild(pop);
  });
}
/* eslint-disable */
function showPopUp(button) {
    const show = document.getElementById(button.dataset.target);
    show.classList.remove('pop-hidden');
    let overlay = document.createElement('div');
    overlay.classList = 'overlay';
    overlay.id = '_overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';
}

function closePopUp(closeId) {
    const show = document.getElementById(closeId);
    show.classList.add('pop-hidden');
    overlay.style.display = 'none';
    let closePop = document.querySelector('#_overlay');
    closePop.remove();
}
    /* es-lint enable */
buildCard(popUpArray);
popUpCard(popUpArray);
