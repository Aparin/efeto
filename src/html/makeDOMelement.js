export default function makeDOMelement(tagName, className, text, id) {
    const element = document.createElement(tagName);
    if (className) {
        const clNms = className.split(' ');
        clNms.forEach(function(item) {
            element.classList.add(item);
        });

    }
    if (text) {
        element.textContent = text;
    }
    if (id) {
        element.id = id;
    }

    return element;
};