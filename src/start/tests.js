import { mkNode } from '../html/makeDOMelement';

describe('makeDOMelement', function() {
    it(`Проверка создания узла`, function() {
        assert.equal(mkNode({ tg: 'р' }).outerHTML, '<р></р>');
        assert.equal(mkNode({ style: 'red', tg: 'р' }).outerHTML, '<р class="red"></р>');
        assert.equal(mkNode({ tg: 'р', text: 'Hi, world', style: 'red' }).outerHTML, '<р class="red">Hi, world</р>');
        assert.equal(mkNode({ id: '5', tg: 'р', text: 'Hi, world', style: 'red' }).outerHTML, '<р class="red" id="5">Hi, world</р>');
        assert.equal(mkNode({ tg: 'р', style: 'red big', text: 'Hi, world', id: '5' }).outerHTML, '<р class="red big" id="5">Hi, world</р>');
    });
    it(`Проверка создания ссылки`, function() {
        assert.equal(mkNode({ tg: 'a', style: 'navbar-brand', text: 'EFETO.ru: веб под ключ', url: '#' }).outerHTML, '<a class="navbar-brand" href="#">EFETO.ru: веб под ключ</a>');
    });
    it(`Значок мобильного меню`, function() {
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

        assert.equal(toggle.outerHTML, '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>');
    });

});