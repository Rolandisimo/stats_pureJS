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
let revenueData = heroVisits.getData('./data/revenue.json');
let impressionsData = heroVisits.getData('./data/impressions.json');
let visitsData = heroVisits.getData('./data/visits.json');

const createPage = () => {
            GaugeComponent({
                "tablet": {
                    "revenue": 120000,
                    "currency": true
                },
                "mobile": {
                    "revenue": 80000,
                    "currency": true
                },
                ...styles.green
            }).render(parentElement);

            GaugeComponent({

                "tablet": {
                    "impressions": 20000000
                },
                "mobile": {
                    "impressions": 30000000
                },

                ...styles.blue
            }).render(parentElement);

            GaugeComponent({
                "tablet": {
                    "visits": 480000000
                },
                "mobile": {
                    "visits": 120000000
                },
                ...styles.yellow
            }).render(parentElement);
}
createPage();


// async function loadPage() {
//     try {
//
//
//
//
//     } catch (e) {
//         console.log("Error in Controller:", e);
//     }
// }
//
// loadPage();
