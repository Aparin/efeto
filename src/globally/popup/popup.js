export default function popup(data) {
    const { msg, height = 120, e } = data;

    const node = document.createElement('div');
    node.id = 'popup';
    const close = `<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span>`;
    const html = `${msg}${close}`;

    node.insertAdjacentHTML('afterbegin', html);

    if (height) {
        node.style.height = height + 'px';
    }

    let left = e.clientX;
    if (left > 320) { left -= 310 } else left = 15;
    if (window.innerWidth < 335) node.style.width = '300px';
    node.style.left = left + 'px';

    let top = e.clientY;
    if (window.innerHeight - top < height) top = window.innerHeight - height - 25;
    node.style.top = top + 25 + 'px';

    document.querySelector('body').appendChild(node);
}