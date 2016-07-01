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
        let gaugeCircle = createElement({node: 'div', class_name: "gauge__circle flexParent flexMiddle flexColumn"});
        let title = createElement({node: 'h2'})
        let dataSum = parseInt(props.mobile.value, 10) + parseInt(props.tablet.value, 10);

        if (props.mobile.currency && props.tablet.currency) {
            title.innerHTML = dataSum.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
        } else {
            title.innerHTML = dataSum.toLocaleString('de-DE');
        }
        gaugeCircle.style.borderColor = props.dark;
        gaugeCircle.appendChild(title);
        // Glue all together in the DOM
        parentElement.appendChild(gaugeCircle);

        return gaugeCircle;
    };


    return new Circle(props);
};





export default CircleComponent;
