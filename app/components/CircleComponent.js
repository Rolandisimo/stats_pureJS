import {createElement, addDataToElement} from '../helpers/helpers.js';





const CircleComponent = (props) => {
    'use strict';
    /*
    *   Circle component
    */
    function Circle(props) {
        this.props = props;
    }

    Circle.prototype.render = (parentElement) => {
        //General variables
        let gaugeCircle = createElement({node: 'div', class_name: "gauge__circle"});

        // Glue all together in the DOM
        parentElement.appendChild(gaugeCircle);

        return gaugeCircle;
    };


    return new Circle(props);
};





export default CircleComponent;
