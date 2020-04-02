//Simplificando el manejo del DOM con dom.js
function Dom(selector) {
    this.selector = selector;
    this.elements = document.querySelectorAll(selector);
};

//function Dom(selectorOrElements) {
//    if (typeof selectorOrElements === 'string') {
//        this.selector = selectorOrElements;
//        this.elements = document.querySelectorAll(selectorOrElements);
//    } else {
//        if (selectorOrElements instanceof Node) { // aprovechamos para verificar si se envolverá
//            this.elements = [selectorOrElements]; // un solo elemento o una lista de elementos
//        } else {
//            this.elements = selectorOrElements;
//        }
//    }
//};
//

Dom.createElement = function(options) {
    var element = document.createElement(options.tag),
    attributes = Object.keys(options.attributes || {}),
    i = 0;
    for(i; i < attributes.length; i++) {
        element.setAttribute( attributes[i], options.attributes[ attributes[i] ] );
    }
    return element;
};

Dom.prototype.append = function(newChildElement) {
    if (!(newChildElement instanceof Element)) {
        if (newChildElement.hasOwnProperty('tag')) {
            newChildElement = Dom.createElement(newChildElement);
        }
    }
    this.elements[0].appendChild(newChildElement);
    return this;
};

//
///*Dom.prototype.children = function() {
//    return this.elements[0].children;
//};*/
//
//Dom.prototype.children = function() {
//    if (this.elements[0] !== undefined) {
//        return new Dom(this.elements[0].children);
//    } else {
//        return Dom.empty([]);
//    }
//};
//



