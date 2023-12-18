import './styles.css';
import { searchItemsList, headerItems } from './data';
import {
  appendBlock,
  appendHeaderEl,
  handleResize,
  appendSidePanelEl,
} from './utils/domManipulations';
import { inputFunction } from './utils/searchFunctions';

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
