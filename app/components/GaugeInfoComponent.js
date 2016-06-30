import {createElement, addDataToElement} from '../helpers/helpers.js';





const GaugeInfoComponent = (props) => {
    'use strict';
    /*
    *   Gauge component
    */
    function GaugeInfoContainer(props) {
        this.render(props);
    }

    GaugeInfoContainer.prototype.render = function(props) {
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
        createGaugeMain = createElement({class_name: "gauge_main col-md-4"});


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
                props
            )
        );
        mobileContainer = createElement(
            options(
                "div",
                "gauge__info_right flexParent flexColumn text-right",
                gaugeInfo,
                "h4",
                'Smartphone',
                props
            )
        );




        // Glue all together in the DOM
        mainContainer.appendChild(createGaugeMain);
    };


    new GaugeInfoContainer(props);
};





export default GaugeInfoComponent;
