import './styles.css';
import { searchItemsList, headerItems } from './data';

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
  const sidePanel = document.getElementById('side-panel');
  const closeBtn = document.getElementById('closebtn');
  const icon = document.getElementById('burger-icon');
  const searchInput = document.getElementById('search-input');

  closeBtn.addEventListener('click', () => {
    if (lastClickedTop !== null) {
      lastClickedTop.classList.remove('sidepanel-top-is-clicked');
      lastClickedBottom.classList.remove('is-opened');
    }
    sidePanel.classList.remove('sidepanel-opened');
  });

  searchInput.addEventListener('keyup', inputFunction);

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
