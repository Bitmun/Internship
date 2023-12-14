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

handleResize();

window.addEventListener('resize', handleResize);

document.addEventListener('DOMContentLoaded', function () {
  let sidePanel = document.getElementById('mySidepanel');
  headerItems.forEach((item) => {
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    liElement.classList.toggle('top-burger-wrapper');
    aElement.textContent = item.text;
    aElement.classList.toggle('aElement');

    let innerUl = document.createElement('ul');
    innerUl.classList.toggle('innerList');
    innerUl.style.display = 'none';
    item.submenu.forEach((subItem) => {
      let subLiElement = document.createElement('li');
      subLiElement.classList.toggle('inner-burger-wrapper');
      let subAElement = document.createElement('a');
      subAElement.href = '#';
      subAElement.textContent = subItem;
      subLiElement.appendChild(subAElement);
      innerUl.appendChild(subLiElement);
    });

    liElement.appendChild(aElement);
    liElement.appendChild(innerUl);
    sidePanel.appendChild(liElement);
  });

  var outerLiElements = document.querySelectorAll('#mySidepanel li');
  var openedUL = null;

  outerLiElements.forEach((outerLi) => {
    outerLi.addEventListener('click', function () {
      var innerUl = this.querySelector('.innerList');
      var anchorTags = this.parentNode.querySelectorAll('a');

      // Close previously opened list
      if (openedUL && openedUL !== innerUl) {
        openedUL.style.display = 'none';
      }
      // Close previously opened list
      if (openedUL && openedUL !== innerUl) {
        openedUL.style.display = 'none';
        var previousAnchorTag = openedUL.parentNode.querySelector('a');
        previousAnchorTag.style.color = 'white';
      }
      console.log(innerUl);
      // Toggle visibility of clicked list
      innerUl.style.display =
        innerUl.style.display === 'none' ? 'block' : 'none';

      // Toggle color of anchor tags
      anchorTags.forEach((anchorTag) => {
        anchorTag.style.color = 'white';
      });

      this.querySelector('a').style.color = 'green';

      openedUL = innerUl;
    });
  });
});

function handleResize() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= 900) {
    closeNav();
  }
}

function openNav() {
  let sidePanel = document.getElementById('mySidepanel');
  sidePanel.style.height = '100%';
  sidePanel.style.paddingTop = '60px';
  sidePanel.style.paddingLeft = '30px';
  sidePanel.style.paddingRight = '30px';
}

function closeNav() {
  let sidePanel = document.getElementById('mySidepanel');
  sidePanel.style.height = '0';
  sidePanel.style.paddingTop = '0';
}
