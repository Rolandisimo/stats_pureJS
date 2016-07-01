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

const createPage = () => {
            const revenueCallback = (data) => {
                GaugeComponent({
                    ...data,
                    ...styles.green
                }).render(parentElement);
            };

            const impressionsCallback = (data) => {
                GaugeComponent({
                    ...data,
                    ...styles.blue
                }).render(parentElement);
            };

            const visitsCallback = (data) => {
                GaugeComponent({
                    ...data,
                    ...styles.yellow
                }).render(parentElement);
            };

            heroRevenue.getData('./data/revenue.json', revenueCallback);
            heroImpressions.getData('./data/impressions.json', impressionsCallback);
            heroVisits.getData('./data/visits.json', visitsCallback);
}
createPage();

/*
 Tried using ES7 async but failed miserably wasting about
 4 hours on debugging.
*/
// async function loadPage() {
//     try {
//
//
//      //more code was here...
//
//     } catch (e) {
//         console.log("Error in Controller:", e);
//     }
// }
//
// loadPage();
