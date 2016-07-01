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
        let gaugeCircle = createElement({node: 'div', class_name: "gauge__circle flexParent flexMiddle flexColumn"}),
            title = createElement({node: 'h2'}),
            dataElement = createElement({node: 'p'}),
            dataSum = parseInt(props.mobile.value, 10) + parseInt(props.tablet.value, 10);

        title.innerHTML = props.title;

        if (props.mobile.currency && props.tablet.currency) {
            dataElement.innerHTML = dataSum.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumSignificantDigits: 1 });
        } else {
            dataElement.innerHTML = dataSum.toLocaleString('de-DE');
        }

        //Add styling from props
        gaugeCircle.style.borderColor = props.dark;
        title.className = "textMuted marginZero";
        dataElement.className = "textBig";

        //Append childs to parentElement
        gaugeCircle.appendChild(title);
        gaugeCircle.appendChild(dataElement);
        // Glue all together in the DOM
        parentElement.appendChild(gaugeCircle);

        return gaugeCircle;
    };


    return new Circle(props);
};





export default CircleComponent;
