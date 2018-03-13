'use strict';

// Navigation handler
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

// When the page is retrieved or refreshed:
window.onload = function() {
  // Create navigation listeners.
  Array.from(
    document.querySelectorAll('nav > div > button')
  ).forEach(button => {
    button.onclick = handleNav;
  });
};
