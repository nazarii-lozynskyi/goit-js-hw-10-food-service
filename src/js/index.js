import foodCardTpl from '../templates/food-card.hbs';
import menu from '../menu.json';

const refs = {
  toolbar: document.querySelector('.toolbar'),
  themeSwitch: document.querySelector('.theme-switch'),
  themeSwitchIcon: document.querySelector('.theme-switch__icon'),
  themeSwitchControl: document.querySelector('.theme-switch__control'),
  themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
  themeSwitchTrack: document.querySelector('.theme-switch__track'),
  themeSwitchMarker: document.querySelector('.theme-switch__marker'),
  menu: document.querySelector('.menu'),
};

/*Создание и рендер разметки по массиву данных menu из menu.json и предоставленному шаблону.*/

const menuItemsMarkup = createElMenuMarkup(menu);
refs.menu.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createElMenuMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}
