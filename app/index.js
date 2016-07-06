require("!style!css!sass!./assets/styles/main.scss");
import HeroModel from './model/HeroModel.js';
import styles from './assets/styles.js';
import GaugeComponent from './components/GaugeComponent.js';





async function createPage() {
    let heroRevenue = new HeroModel,
        heroImpressions = new HeroModel,
        heroVisits = new HeroModel,
        parentElement = document.querySelector('#main_container');


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


    await heroRevenue.getData('./data/revenue.json', revenueCallback);
    await heroImpressions.getData('./data/impressions.json', impressionsCallback);
    await heroVisits.getData('./data/visits.json', visitsCallback);
}
// createPage()
