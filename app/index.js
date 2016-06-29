require("!style!css!sass!./styles/main.scss");
import axios from 'axios';
import { createDiv } from './helpers/helpers.js';
import HeroModel from './model/HeroModel.js';





//Create rest model
let heroModel = new HeroModel;
heroModel.get();





// Main Component constructor
const loadPage = (sources) => {
    (function(window) {
        'use strict';
        /*
        *   Gauge component
        */

        // Proposal 2
        // let mainContainer = document.querySelector('#main_container');
        // let gaugeMain = document.querySelector('.gauge_main');

        function Gauge(source) {
            this._init(source);
        }

        Gauge.prototype._init = function(source) {
            //General variables
            let gaugeCircle = this.gaugeCircle,
                gaugeInfo = this.gaugeInfo,
                createGaugeMain = this.createGaugeMain,
                mainContainer = this.mainContainer;

            // Options constructor
            let options = (class_name) => {
                return {
                    class_name
                }
            };

            //Grab the main container for gauges
            mainContainer = document.querySelector('#main_container');

            // Create Gauge DOM elements
            createGaugeMain = createDiv(options("gauge_main col-md-4"));
            gaugeCircle = createDiv(options("gauge__circle"));
            gaugeInfo = createDiv(options("gauge__info"));

            //Append elements to the DOM
            createGaugeMain.appendChild(gaugeCircle);
            createGaugeMain.appendChild(gaugeInfo);

            mainContainer.appendChild(createGaugeMain);

            // TODO: Add Titles to gaugeInfo
        };

        sources
            .map(source => {
                new Gauge(source);
            });

        // Proposal 2
        // sources
        //     .map(source => {
        //         mainContainer.appendChild(gaugeMain.cloneNode(true))
        //     });

    }(window));
};





// Exports
export {loadPage};
