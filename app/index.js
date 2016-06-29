require("!style!css!sass!./styles/main.scss");
import HeroModel from './model/HeroModel.js';




// Initialize App
let heroModel = new HeroModel;
heroModel.get();
