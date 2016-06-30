import {createElement, addDataToElement} from '../helpers/helpers.js';





const GaugeComponent = (sources, format = "") => {
    'use strict';
    /*
    *   Gauge component
    */
    function Gauge(sources, format) {
        this._init(sources, format);
    }

    Gauge.prototype._init = function(sources, format) {
        //General variables
        let gaugeCircle = this.gaugeCircle,
            gaugeInfo = this.gaugeInfo,
            createGaugeMain = this.createGaugeMain,
            mainContainer = this.mainContainer,
            tabletContainer,
            mobileContainer;




        // Options constructor
        let options = (node, class_name, parentNode, titleNode, titleText, data) => {
            return {node, class_name, parentNode, titleNode, titleText, data};
        };


        // Main Wrappers
        mainContainer = document.querySelector('#main_container');
        createGaugeMain = createElement(options("div", "gauge_main col-md-4"));

        // Gauge Top part – Circle, data
        gaugeCircle = createElement(options("div", "gauge__circle", createGaugeMain));
        // Gauge Bottom part – Info, data
        gaugeInfo = createElement(options("div", "gauge__info flexParent flexBetween", createGaugeMain));

        // Gauge Info data containers
        tabletContainer = createElement(
            options(
                "div",
                "gauge__info_left flexParent flexColumn text-left",
                gaugeInfo,
                'h4',
                'Tablet',
                sources
            )
        );
        mobileContainer = createElement(
            options(
                "div",
                "gauge__info_right flexParent flexColumn text-right",
                gaugeInfo,
                "h4",
                'Smartphone',
                sources
            )
        );




        // Glue all together in the DOM
        mainContainer.appendChild(createGaugeMain);
    };

    // sources.map(source => {
    //     new Gauge(source);
    // });
    new Gauge(sources);
};





export default GaugeComponent;
