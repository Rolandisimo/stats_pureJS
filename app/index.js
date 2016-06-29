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
            let gaugeCircle = this.gaugeCircle,
                gaugeInfo = this.gaugeInfo;

            //Grab the main container for gauges
            this.mainContainer = document.querySelector('#main_container');

            // Create Gauge DOM elements
            this.createGaugeMain = createDiv();
            this.createGaugeMain.className = "gauge_main col-md-4";


            gaugeCircle = createDiv();
            gaugeInfo = createDiv();

            //Set classes.
            gaugeCircle.className = "gauge__circle";
            gaugeInfo.className = "gauge__info";

            //Construct inner HTMLs


            //Append elements to the DOM
            this.createGaugeMain.appendChild(gaugeCircle);
            this.createGaugeMain.appendChild(gaugeInfo);

            this.mainContainer.appendChild(this.createGaugeMain);

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
