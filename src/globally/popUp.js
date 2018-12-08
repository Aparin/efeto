import './popup.css';

export default function popup(msg) {
    const node = document.createElement('div');
    node.id = 'popup';
    const close = `<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span>`;
    const html = `${msg}${close}`;

    node.insertAdjacentHTML('afterbegin', html);
    return node;
}