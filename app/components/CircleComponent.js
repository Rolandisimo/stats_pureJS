import {createElement, addDataToElement} from '../helpers/helpers.js';






const CircleComponent = (props) => {
    'use strict';
    /*
    *   Circle component
    */
    function Circle(props) {
        this.render(props);
    }

    Circle.prototype.render = function(props) {
        //General variables
        let gaugeCircle = this.gaugeCircle;

        gaugeCircle = createElement({class_name: "gauge_main col-md-4"});

        // Glue all together in the DOM
        mainContainer.appendChild(createGaugeMain);
    };


    new Circle(props);
};





export default CircleComponent;
