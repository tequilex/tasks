const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const itemsList = document.querySelector('#items');

const loop = (direction, e) => {
  e.preventDefault();

  if (direction == 'right') {
    itemsList.appendChild(itemsList.firstElementChild);
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
}

rightButton.addEventListener('click', e => {
  loop('right', e);
})

leftButton.addEventListener('click', e => {
  loop('left', e);
})