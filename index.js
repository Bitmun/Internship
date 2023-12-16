let headerItems = [
  {
    text: 'Why Spring',
    submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3', 'Submenu 4', 'Submenu 5'],
  },
  {
    text: 'Learn',
    submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3', 'Submenu 4'],
  },
  {
    text: 'Projects',
    submenu: [
      'Submenu 1',
      'Submenu 2',
      'Submenu 3',
      'Submenu 4',
      'Submenu 5',
      'Submenu 6',
      'Submenu 7',
      'Submenu 8',
      'Submenu 9',
      'Submenu 10',
      'DEVELOPMENT TOOLS',
      'Submenu 11',
      'Submenu 12',
    ],
  },
  { text: 'Academy', submenu: ['Submenu 1', 'Submenu 2'] },
  {
    text: 'Solutions',
    submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3', 'Submenu 4', 'Submenu 5'],
  },
  { text: 'Community', submenu: ['Submenu 1', 'Submenu 2', 'Submenu 3'] },
];

let searchItemsList = [
  {
    title: 'Spring Boot',
    desc: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
    img: 'https://spring.io/img/projects/spring-boot.svg',
  },
  {
    title: 'Spring Framework',
    desc: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    img: 'https://spring.io/img/projects/spring-framework.svg?v=2',
  },
  {
    title: 'Spring Data',
    desc: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
    img: 'https://spring.io/img/projects/spring-data.svg',
  },
  {
    title: 'Spring Cloud Data Flow',
    desc: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    img: 'https://spring.io/img/projects/spring-data-flow.svg',
  },
  {
    title: 'Spring Cloud',
    desc: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
    img: 'https://spring.io/img/projects/spring-cloud.svg',
  },
  {
    title: 'Spring Security',
    desc: 'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    img: 'https://spring.io/img/projects/spring-security.svg',
  },
];

let delayTimer;

const appendBlock = (blockData) => {
  const blocksSection = document.getElementById('blocks-section');
  const { title, desc, img } = blockData;
  const container = document.createElement('div');

  container.classList.add('block-container');
  container.innerHTML = `
  <article class="block-wrapper">
  <a class="block">
    <div class="image-container">
      <img src="${img}" />
    </div>
    <div class="block-text-container">
      <h1>${title}</h1>
      <p>
        ${desc}
      </p>
    </div>
  </a>
</article>
  `;
  blocksSection.appendChild(container);
};

const appendHeaderEl = (el) => {
  const { text, submenu } = el;
  let ul = document.getElementById('navigation-ul');
  const topLi = document.createElement('li');
  topLi.classList.add('dropdown');
  topLi.innerHTML = `
  <a href="#">${text}</a>
  `;
  const innerUl = document.createElement('ul');
  innerUl.classList.add('dropdown-menu');
  submenu.map((el) => {
    innerUl.innerHTML += `
      <li>
        <p>${el}</p>  
      </li>
    `;
  });
  topLi.appendChild(innerUl);
  ul.appendChild(topLi);
};

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', handleResize);

  let lastClickedTop = null;
  let lastClickedBottom = null;
  let sidePanel = document.getElementById('side-panel');
  let closeBtn = document.getElementById('closebtn');
  const icon = document.getElementById('burger-icon');

  closeBtn.addEventListener('click', () => {
    if (lastClickedTop !== null) {
      lastClickedTop.classList.remove('sidepanel-top-is-clicked');
      lastClickedBottom.classList.remove('is-opened');
    }
    sidePanel.classList.remove('sidepanel-opened');
  });

  icon.addEventListener('click', () => {
    sidePanel.classList.toggle('sidepanel-opened');
  });

  headerItems.map((item) => {
    appendHeaderEl(item);
    appendSidePanelEl(item);
  });

  searchItemsList.map((item) => appendBlock(item));
  const topSideButtons = document.querySelectorAll('.sidepanel-top');

  topSideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (lastClickedTop !== null && lastClickedTop !== button) {
        lastClickedBottom.classList.remove('is-opened');
        lastClickedTop.classList.remove('sidepanel-top-is-clicked');
      }
      if (lastClickedTop !== null) {
        lastClickedTop.classList.remove('sidepanel-top-is-clicked');
      }
      button.classList.toggle('sidepanel-top-is-clicked');
      const ul = button.nextElementSibling;
      ul.classList.toggle('is-opened');
      lastClickedTop = button;
      lastClickedBottom = ul;
    });
  });
});

const appendSidePanelEl = (item) => {
  const sidePanel = document.getElementById('side-panel');
  const mainStr = document.createElement('li');
  mainStr.classList.add('sidepanel-top');
  mainStr.innerHTML = `
  <a>${item.text}</a>
  `;
  const innerUl = document.createElement('ul');
  item.submenu.map((el) => {
    innerUl.innerHTML += `<li>${el}</li>`;
  });
  innerUl.classList.add('is-closed');
  sidePanel.appendChild(mainStr);
  sidePanel.appendChild(innerUl);
};

function handleResize() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 900) {
    closeNav();
  }
}

function closeNav() {
  let sidePanel = document.getElementById('side-panel');
  sidePanel.classList.remove('sidepanel-opened');
}

function inputFunction() {
  const inputElement = document.getElementById('search-input');
  const query = inputElement.value.trim().toLowerCase();
  delay(() => {
    searchItems(query);
  }, 300);
}

function searchItems(query) {
  const filteredItems = searchItemsList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
  );
  let parent = document.getElementById('blocks-section');
  console.log(filteredItems);
  if (filteredItems.length === 0) {
    parent.innerHTML = 'No results';
    parent.classList.add('is-empty');
  } else {
    parent.classList.remove('is-empty');
    parent.innerHTML = '';
    filteredItems.map((item) => appendBlock(item));
  }
}

function delay(func, delay) {
  clearTimeout(delayTimer);
  delayTimer = setTimeout(func, delay);
}
