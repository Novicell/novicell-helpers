'use strict';

const buttonsWithLink = function() {
    const buttonsWithLink = document.querySelectorAll('a > .button');
    if (!buttonsWithLink || buttonsWithLink.length <= 0) {
        return;
    }

    for (let i = 0; i < buttonsWithLink.length; i++) {
        const currentLink = buttonsWithLink[ i ];
        const parent = currentLink.parentNode;

        parent.classList.add('button-with-link');
    }
};

const findAncestor = function(el, cls) {
    if (el == null) {
        return;
    }
    while ((el = el.parentElement) && !el.classList.contains(cls)) {
        return el;
    }
};

const toggleClass = function(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        const classes = el.className.split(' ');
        const existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }

        el.className = classes.join(' ');
    }
};

const hasClass = function(el, className) {
    if (el.classList.contains(className)) {
        return true;
    }
    return false;
};

const isVisible = function(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
};

const accordionAnimate = function(element, listToOpen = '.js-accordion') {
    var parentItem = element.parentElement;
    parentItem.classList.toggle('accordion--active');

    var elementContent = parentItem.querySelector(listToOpen);

    if (elementContent != undefined) {
        var elementContentHeight = elementContent.offsetHeight;
        var newHeight;
        var heightAttr = parentItem.dataset.height;

        if (heightAttr === undefined) {
            newHeight = parentItem.offsetHeight + elementContentHeight;
            parentItem.dataset.height = parentItem.offsetHeight;
        }
        else {
            if (heightAttr < parentItem.offsetHeight) {
                newHeight = heightAttr;
            }
            else {
                newHeight = parentItem.offsetHeight + elementContentHeight;
            }
        }
        parentItem.style.height = newHeight + 'px';
    }
}

export {
    buttonsWithLink,
    findAncestor,
    toggleClass,
    hasClass,
    isVisible,
    accordionAnimate
};
