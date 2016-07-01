import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {
    this.getData = function(url, cb) {
        //Simulate Backend server
        setTimeout(function () {
            const data = axios.get(url)
            .then(response => {
                cb && cb(response.data);

                
                return response.data;
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
