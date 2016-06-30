import {createElement, addDataToElement} from '../helpers/helpers.js';





const GaugeInfoComponent = (props) => {
    'use strict';
    /*
    *   Gauge component
    */
    function GaugeInfoContainer(props) {
        this.props = props;
    }

    GaugeInfoContainer.prototype.render = function(parentElement) {
        console.log(parentElement);

        // Gauge Bottom part – Info, data
        let gaugeInfo = createElement({node: 'div', class_name: "gauge__info flexParent flexBetween"});

        // Gauge Info data containers
        let tabletContainer = createElement(
            {
                node: 'div',
                class_name: 'gauge__info_left flexParent flexColumn text-left',
                titleNode: 'h4',
                titleText: 'Tablet'
            }
        );
        let mobileContainer = createElement(
            {
                node: 'div',
                class_name: 'gauge__info_right flexParent flexColumn text-right',
                titleNode: 'h4',
                titleText: 'Smartphone'
            }
        );



        gaugeInfo.appendChild(tabletContainer);
        gaugeInfo.appendChild(mobileContainer);

        console.log(gaugeInfo);

        // Glue all together in the DOM
        parentElement.appendChild(gaugeInfo);

        return gaugeInfo;
    };


    return new GaugeInfoContainer(props);
};





export default GaugeInfoComponent;
