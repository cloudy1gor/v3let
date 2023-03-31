//? ### Utils
import documentReady from './utils/documentReady.js';
import lazyLoad from './vendors/lazyLoad.js';
// import checkDevice from '../utils/checkDevice.js';

import aos from './components/aos.js';
import header from "./components/header.js";
// import menu from "./components/menu.js";
import up from "./components/up.js";
import modal from "./components/modal.js";
import slider from "./components/slider.js";
// import popUp from "./components/popup";
// import themeSwitcher from "./components/themeSwitcher";

//? ### Core
import './core/vendors.js';
import './core/modules.js';
import './core/components.js';

//? ### Pages
import './pages/home.js';

documentReady(() => {
	// checkDevice();
	up();
	aos();
	lazyLoad();
	header();
	// menu();
	modal();
	slider();
});
