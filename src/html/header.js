import { mkNode } from '../html/makeDOMelement';
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

/*
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
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
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    */