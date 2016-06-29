//Helper function

/*
    Create elements
    @params: STRING – the className
*/
const createDiv = (klass = "") => {
    let element = document.createElement('div');
    element.className = klass;
    return element;
};






// Exports
export { createDiv };
