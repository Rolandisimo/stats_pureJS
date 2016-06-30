import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {
    this.getRevenue = function() {
        //Simulate Backend server
        setTimeout(function () {
            const data = axios.get('./data.json')
            .then(response => {
                //Make page
                GaugeComponent(response.data[0]);
            })
            .catch(error => {
                console.log("Error: ", error);
                document.write("Oops, something went wrong!");
            });
        }, 1000);
    },
    this.getImpressions = function () {
        setTimeout(function () {
            const data = axios.get('./data.json')
            .then(response => {
                //Make page
                GaugeComponent(response.data[1]);
            })
            .catch(error => {
                console.log("Error: ", error);
                document.write("Oops, something went wrong!");
            });
        }, 1000);
    },
    this.getVisits = function () {
        setTimeout(function () {
            const data = axios.get('./data.json')
            .then(response => {
                //Make page
                GaugeComponent(response.data[2]);
            })
            .catch(error => {
                console.log("Error: ", error);
                document.write("Oops, something went wrong!");
            });
        }, 1000);
    }

    return this;
};

export default HeroModel;
