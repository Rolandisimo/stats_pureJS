import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {
    this.getData = function(url) {
        var promise;

        //Simulate Backend server
        setTimeout(function () {
            const data = axios.get(url)
            .then(response => response)
            .catch(error => {
                console.log("Error: ", error);
                document.write("Oops, something went wrong!");
            });
        }, 1000);

        return promise;
    }

    return this;
};

export default HeroModel;
