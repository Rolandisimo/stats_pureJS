import {createElement, addDataToElement} from '../helpers/helpers.js';
import GaugeInfoComponent from './GaugeInfoComponent.js';
import CircleComponent from './CircleComponent.js';





const GaugeComponent = (props) => {
    'use strict';
    /*
    *   Gauge component
    */
    function GaugeContainer(props) {
        this.props = props;
        console.log(props);
        return this;
    }

    GaugeContainer.prototype.render = (parentElement) => {
        //General variables


        // Main Wrappers
        let gaugeMain = createElement({node: 'div', class_name: "gauge_main col-md-4"});

        // Render Child Components
        CircleComponent(props).render(gaugeMain);
        GaugeInfoComponent(props).render(gaugeMain);

        parentElement.appendChild(gaugeMain);

        return gaugeMain;
    };


    return new GaugeContainer(props);
};





export default GaugeComponent;
