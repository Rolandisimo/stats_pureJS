import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {
    this.get = function() {
        //Simulate Backend server
        setTimeout(function () {
            const data = axios.get('./data.json')
            .then(response => {
                console.log("Axios Data: ", response.data);
                //Make page
                GaugeComponent(response.data);
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
