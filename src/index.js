import Tooltip from './ui-content/tooltip';
import Dropdown from './ui-content/dropdown';
import Tabs from './ui-content/tabs';
import Snackbar from './ui-content/snackbar';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snakbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('You clicked me :)');
});
