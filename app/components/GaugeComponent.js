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
        return this;
    }

    GaugeContainer.prototype.render = (parentElement) => {
        //General variables


        // Options constructor
        // let options = (node, class_name, parentNode, titleNode, titleText, data) => {
        //     return {node, class_name, parentNode, titleNode, titleText, data};
        // };


        // Main Wrappers
        let gaugeMain = createElement({node: 'div', class_name: "gauge_main col-md-4"});

        // Render Child Components
        CircleComponent().render(gaugeMain);
        GaugeInfoComponent().render(gaugeMain);

        parentElement.appendChild(gaugeMain);

        return gaugeMain;
    };


    return new GaugeContainer(props);
};





export default GaugeComponent;
