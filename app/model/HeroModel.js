import axios from 'axios';
import GaugeComponent from '../components/GaugeComponent.js';

const HeroModel = function() {

    this.getData = function(url, cb) {
        //Simulate Backend server
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                axios.get(url).then(response => {
                    cb && cb(response.data);

                    resolve(response.data);
                });
            }, 1000);
        });
    };
    return this;
};

export default HeroModel;
