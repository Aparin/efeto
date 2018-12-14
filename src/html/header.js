import mkNode from '../efeto/makeNode';
const insert = (target, node) => {
    document.querySelector(target).appendChild(node);
}

// фон хэдера
insert('body', mkNode({ tg: 'nav', style: 'navbar navbar-expand-lg navbar-dark bg-dark' }));

// лого
const logo = mkNode({ tg: 'a', style: 'navbar-brand', text: 'EFETO.ru: веб под ключ', url: '#' });
insert('nav', logo);


//  решётка мобильного меню
const html = mkNode({ tg: 'span', style: 'navbar-toggler-icon' }).outerHTML;
const toggle = mkNode({
    tg: 'button',
    style: 'navbar-toggler',
    html: html,
    url: '#',
    type: 'button',
    toggle: 'collapse',
    target: '#navbarColor02',
    controls: 'navbarColor02',
    expanded: 'false',
    label: 'Toggle navigation'
});
insert('nav', toggle);

// меню
const menu = mkNode({ tg: 'div', style: 'collapse navbar-collapse', id: 'navbarColor02' });
const ul = mkNode({ tg: 'ul', style: 'navbar-nav mr-auto' });
const itCont = `
  <li class="nav-item active">
  <a class="nav-link" href="#">главная <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">магазины</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">сайты</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">скрипты</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#">приложения</a>
  </li>
`;
ul.insertAdjacentHTML('afterbegin', itCont);
menu.appendChild(ul);
insert('nav', menu);