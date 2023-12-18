import { searchItemsList } from '../data';
import { appendBlock } from './domManipulations';

let delayTimer;

export const inputFunction = () => {
  const inputElement = document.getElementById('search-input');
  const query = inputElement.value.trim().toLowerCase();
  delay(() => {
    searchItems(query);
  }, 300);
};

export const searchItems = (query) => {
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
};

export const delay = (func, delay) => {
  clearTimeout(delayTimer);
  delayTimer = setTimeout(func, delay);
};
