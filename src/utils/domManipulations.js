export const appendBlock = (blockData) => {
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

export const appendHeaderEl = (el) => {
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

export const appendSidePanelEl = (item) => {
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

export const handleResize = () => {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 900) {
    closeNav();
  }
};

export const closeNav = () => {
  let sidePanel = document.getElementById('side-panel');
  sidePanel.classList.remove('sidepanel-opened');
};
