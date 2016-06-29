//Helper functions

/*
    Create elements
    @params: STRING – the className
*/
const createDiv = (options = {}) => {
    'use strict';

    let element = document.createElement('div');
    
    if (options.class_name) {
        element.className = options.class_name;
    }

    return element;
};






// Exports
export { createDiv };
