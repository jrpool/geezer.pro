'use strict';

// Navigation handler.
const destNames = ['intro', 'why', 'donots', 'about', 'free', 'contact'];
const handleNav = event => {
  const currentDestName = event.currentTarget.getAttribute('dest');
  destNames.forEach(destName => {
    if (destName === currentDestName) {
      document
      .querySelector(`nav > div > button[dest=${destName}]`)
      .classList
      .add('disabled');
    }
    else {
      document
      .querySelector(`nav > div > button[dest="${destName}"]`)
      .classList
      .remove('disabled');
    }
  });
  const currentDestIndex = destNames.indexOf(currentDestName);
  destNames.slice(0, currentDestIndex).forEach(destName => {
    document.querySelector(`#${destName}`).classList.add('hidden');
  });
  destNames.slice(currentDestIndex).forEach(destName => {
    document.querySelector(`#${destName}`).classList.remove('hidden');
  });
  window.scroll(0, 0);
};

// Resize handler.
const handleResize = () => {
  if (window.innerWidth > 1200) {
    document.querySelector('#nav-left').classList.remove('col-12');
    document.querySelector('#nav-left').classList.add('col-5');
    document.querySelector('#nav-right').classList.remove('col-12');
    document.querySelector('#nav-right').classList.add('col-7');
  }
  else {
    document.querySelector('#nav-left').classList.remove('col-5');
    document.querySelector('#nav-left').classList.add('col-12');
    document.querySelector('#nav-right').classList.remove('col-7');
    document.querySelector('#nav-right').classList.add('col-12');
  }
};

// When the page is retrieved or refreshed:
window.onload = () => {
  // Create navigation listeners.
  Array.from(
    document.querySelectorAll('nav > div > button')
  ).forEach(button => {
    button.onclick = handleNav;
  });
  window.onresize = handleResize;
  handleResize();
};
