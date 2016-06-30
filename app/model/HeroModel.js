import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {
    this.getData = function(url) {
        //Simulate Backend server
        setTimeout(function () {
            const data = axios.get(url)
            .then(response => {

                console.log(response);
                return response;


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
