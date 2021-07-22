import foodCardTpl from '../templates/food-card.hbs';
import menu from '../menu.json';

const refs = {
  body: document.querySelector('body'),
  toolbar: document.querySelector('.toolbar'),
  themeSwitch: document.querySelector('.theme-switch'),
  themeSwitchIcon: document.querySelector('.theme-switch__icon'),
  themeSwitchControl: document.querySelector('.theme-switch__control'),
  themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
  themeSwitchTrack: document.querySelector('.theme-switch__track'),
  themeSwitchMarker: document.querySelector('.theme-switch__marker'),
  menu: document.querySelector('.menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

/* При изменении темы, добавляется на элемент body класс light-theme или dark-theme. */
refs.themeSwitchToggle.addEventListener(
  'change',
  onChangingPositionThemeSwitchToggle
);

function onChangingPositionThemeSwitchToggle() {
  if (refs.themeSwitchToggle.checked === true) {
    /* Удаление класса light-theme */
    refs.body.classList.remove('light-theme');

    /* Добавляется на элемент body класс dark-theme */
    refs.body.classList.add('dark-theme');

    /* Удаление предыдущих настроек темы из localStorage */
    localStorage.removeItem('Theme');

    /* Выбранная тема сохраняеться между перезагрузками страницы. Для хранения темы использован localStorage */
    localStorage.setItem('Theme', 'DARK');
  } else {
    /* Удаление класса dark-theme */
    refs.body.classList.remove('dark-theme');

    /* Добавляется на элемент body класс light-theme */
    refs.body.classList.add('light-theme');

    /* Удаление предыдущих настроек темы из localStorage */
    localStorage.removeItem('Theme');

    /* Выбранная тема сохраняеться между перезагрузками страницы. Для хранения темы использован localStorage */
    localStorage.setItem('Theme', 'LIGHT');
  }
}

/* Если при загрузке страницы тема тёмная - checked у чекбокса #theme-switch-toggle - true 
(чтобы ползунок сдвинулся в правильное положение.) */

if (localStorage.getItem('Theme') === 'DARK') {
  refs.themeSwitchToggle.checked = true;
  /*  */
  //refs.themeSwitchToggle.style.transform = null;

  /* Удаление класса light-theme */
  refs.body.classList.remove('light-theme');

  /* Добавляется на элемент body класс dark-theme */
  refs.body.classList.add('dark-theme');
}

/*Создание и рендер разметки по массиву данных menu из menu.json и предоставленному шаблону.*/

const menuItemsMarkup = createElMenuMarkup(menu);
refs.menu.insertAdjacentHTML('beforeend', menuItemsMarkup);

function createElMenuMarkup(menu) {
  return menu.map(foodCardTpl).join('');
}
