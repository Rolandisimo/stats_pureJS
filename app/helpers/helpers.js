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
        let title = document.createElement(options.titleNode);
        if (options.titleStyle) {
            title.style.color = options.titleStyle;
        }
        title.innerHTML = options.titleText;


        element.appendChild(title);
    }

    //Add data
    if (options.data) {
        //Save data as props
        let props = options.data;
        // Text containers
        let dataContainer = document.createElement('p'),
            percentageRatioElement = document.createElement('span'),
            numberElement = document.createElement('span');
        //Numerical values
        let dataSum = parseInt(props.mobile.value, 10) + parseInt(props.tablet.value, 10),
            tabletPercentage = `${Math.round((props.tablet.value / dataSum)*100)}%`,
            mobilePercentage = `${100 - parseInt(tabletPercentage, 10)}%`,
            tabletNumber = props.tablet.value,
            mobileNumber = props.mobile.value;

        if (props.mobile.currency && props.tablet.currency) {
            tabletNumber = tabletNumber.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
            mobileNumber = mobileNumber.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
        } else {
            tabletNumber = tabletNumber.toLocaleString('de-DE');
            mobileNumber = mobileNumber.toLocaleString('de-DE');
        }

        switch (options.titleText.toLowerCase().trim()) {
            case 'tablet':
                percentageRatioElement.innerHTML = tabletPercentage;
                numberElement.innerHTML = tabletNumber;

                break;
            case 'smartphone':
                percentageRatioElement.innerHTML = mobilePercentage;
                numberElement.innerHTML = mobileNumber;

                break;
        }

        percentageRatioElement.className += " spaceRight"
        numberElement.className += " textMuted"
        //Append to container
        dataContainer.appendChild(percentageRatioElement)
        dataContainer.appendChild(numberElement)
        //Append to parentElement
        element.appendChild(dataContainer)
    }

    return element;
};

const addDataToElement = (data) => {

}



// Exports
export { createElement, addDataToElement };
