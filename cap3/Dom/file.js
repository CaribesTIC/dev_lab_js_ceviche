//Simplificando el manejo del DOM con dom.js
function Dom(selector) {
    this.selector = selector;
    this.elements = document.querySelectorAll(selector);
};

Dom.createElement = function(options) {
    var element = document.createElement(options.tag),
    attributes = Object.keys(options.attributes || {}),
    i = 0;
    for(i; i < attributes.length; i++) {
        element.setAttribute(attributes[i],
        options.attributes[attributes[i]]);
    }
    return element;
};



