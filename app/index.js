require("!style!css!sass!./assets/styles/main.scss");
import HeroModel from './model/HeroModel.js';
import styles from './assets/styles.js';
import GaugeComponent from './components/GaugeComponent.js';





// Set variables
let heroRevenue = new HeroModel;
let heroImpressions = new HeroModel;
let heroVisits = new HeroModel;
let parentElement = document.querySelector('#main_container');

// Render App
const createPage = () => {
    const revenueCallback = (data) => {
        GaugeComponent({
            ...data,
            ...styles.green,
            title: 'Revenue'
        }).render(parentElement);
    };

    const impressionsCallback = (data) => {
        GaugeComponent({
            ...data,
            ...styles.blue,
            title: 'Impressions'
        }).render(parentElement);
    };

    const visitsCallback = (data) => {
        GaugeComponent({
            ...data,
            ...styles.yellow,
            title: 'Visits'
        }).render(parentElement);
    };

    heroRevenue.getData('./data/revenue.json', revenueCallback);
    heroImpressions.getData('./data/impressions.json', impressionsCallback);
    heroVisits.getData('./data/visits.json', visitsCallback);
}





createPage();
