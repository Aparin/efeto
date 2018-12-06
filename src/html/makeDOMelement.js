const mkNode = (data) => {
    const {
        tg,
        style,
        text,
        html,
        id,
        url,
        type,
        toggle,
        target,
        controls,
        expanded,
        label
    } = data;

    const node = document.createElement(tg);
    if (style) {
        const classNames = style.split(' ');
        classNames.forEach(function(item) {
            node.classList.add(item);
        });
    }
    if (text) { node.textContent = text; }
    if (html) { node.innerHTML = html; }
    if (id) { node.id = id; }
    if (url) { node.href = url; }
    if (type) { node.type = type }
    if (toggle) { node.setAttribute('data-toggle', toggle) }
    if (target) { node.setAttribute('data-target', target) }
    if (controls) { node.setAttribute('aria-controls', controls) }
    if (expanded) { node.setAttribute('aria-expanded', expanded) }
    if (label) { node.setAttribute('aria-label', label) }
    return node;
};

export { mkNode };