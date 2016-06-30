require("!style!css!sass!./assets/styles/main.scss");
import HeroModel from './model/HeroModel.js';
import styles from './assets/styles.js';
import GaugeComponent from './components/GaugeComponent.js';




// Initialize App
let heroRevenue = new HeroModel;
let heroImpressions = new HeroModel;
let heroVisits = new HeroModel;

//Make page
let parentElement = document.querySelector('#main_container');


async function loadPage() {
    try {
        let revenueData = await heroVisits.getData('./data/revenue.json');
        let impressionsData = await heroVisits.getData('./data/impressions.json');
        let visitsData = await heroVisits.getData('./data/visits.json');


        GaugeComponent({
            ...revenueData,
            ...styles.green
        }).render(parentElement);

        GaugeComponent({
            ...impressionsData,
            ...styles.blue
        }).render(parentElement);

        GaugeComponent({
            ...visitsData,
            ...styles.yellow
        }).render(parentElement);
    } catch (e) {
        console.log("Error in Controller:", e);
    }
}

loadPage();
