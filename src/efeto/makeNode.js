const mkNode = (data) => {
    const {
        tg,
        classes,
        width,
        maxWidth,
        height,
        margin,
        text,
        html,
        id,
        url,
        src,
        type,
        toggle,
        target,
        controls,
        expanded,
        label
    } = data;

    const node = document.createElement(tg);
    if (classes) {
        const classNames = classes.split(' ');
        classNames.forEach(function(item) {
            node.classList.add(item);
        });
    }
    if (width) { node.style.width = width; }
    if (maxWidth) { node.style.maxWidth = maxWidth; }
    if (height) { node.style.height = height; }

    if (margin) { node.style.margin = margin; }
    if (text) { node.textContent = text; }
    if (html) { node.innerHTML = html; }
    if (id) { node.id = id; }
    if (url) { node.href = url; }
    if (src) { node.src = src; }
    if (type) { node.type = type }
    if (toggle) { node.setAttribute('data-toggle', toggle) }
    if (target) { node.setAttribute('data-target', target) }
    if (controls) { node.setAttribute('aria-controls', controls) }
    if (expanded) { node.setAttribute('aria-expanded', expanded) }
    if (label) { node.setAttribute('aria-label', label) }
    return node;
};

export default mkNode;