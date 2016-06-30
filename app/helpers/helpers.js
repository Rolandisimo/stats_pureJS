//Helper functions

/*
    Create elements
    @params: STRING – the className
*/
const createElement = (options = {}) => {
    'use strict';

    let element = document.createElement(options.node);

    //Add class names to the element
    if (options.class_name) {
        element.className = options.class_name;
    }

    //Append to parent node
    if (options.parentNode) {
        options.parentNode.appendChild(element);
    }

    //Add Titles
    if (options.titleNode && options.titleText) {
        var title = document.createElement(options.titleNode);
        title.className = "textYellow"
        title.innerHTML = options.titleText;

        element.appendChild(title);
    }

    //Add data
    if (options.data) {

        // Cache the according data for Tablet and Mobile
        let mobileData, tabletData;
        mobileData = options.data.mobile;
        tabletData = options.data.tablet;
        console.log(options.data);
        //Set the data as a number
        switch (true) {
            case mobileData.hasOwnProperty('revenue'):
                mobileData = mobileData.revenue;
                tabletData = tabletData.revenue;
                break;
            case mobileData.hasOwnProperty('impressions'):
                mobileData = mobileData.impressions;
                tabletData = tabletData.impressions;
                break;
            case mobileData.hasOwnProperty('visits'):
                mobileData = mobileData.visits;
                tabletData = tabletData.visits;
                break;
        }

        let dataSum = mobileData + tabletData,
            tabletPercentage = `${Math.round((tabletData / dataSum)*100)}%`,
            mobilePercentage = `${100 - parseInt(tabletPercentage, 10)}%`,
            parElement = document.createElement('p'),
            percentageRatioElement = document.createElement('span'),
            numberElement = document.createElement('span');

        percentageRatioElement.className = "spaceRight";
        numberElement.className = "textMuted"


        switch (options.titleText.toLowerCase().trim()) {
            case 'tablet':

                percentageRatioElement.innerHTML = tabletPercentage;
                if (options.data.tablet.currency) {
                    numberElement.innerHTML = tabletData.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
                } else {
                    numberElement.innerHTML = tabletData.toLocaleString('de-DE');
                }

                break;
            case 'smartphone':

                percentageRatioElement.innerHTML = mobilePercentage;
                if (options.data.mobile.currency) {
                    numberElement.innerHTML = mobileData.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
                } else {
                    numberElement.innerHTML = mobileData.toLocaleString('de-DE');
                }
                break;
            default:

        }


        parElement.appendChild(percentageRatioElement);
        parElement.appendChild(numberElement);
        element.appendChild(parElement);

    }


    return element;
};

const addDataToElement = (data) => {

}



// Exports
export { createElement, addDataToElement };
