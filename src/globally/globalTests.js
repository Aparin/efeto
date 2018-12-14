import popup from './popup/';

describe('popup', function() {
    it(`Проверка создания попапа`, function() {
        const mess = 'Привет! <br> This is message';
        const html = `<div id="popup">${mess}<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span></div>`;
        assert.equal(popup(mess).outerHTML, html);
        assert.equal(popup(mess, 200).style.height, '200px');
        assert.equal(popup(mess, 200).style.marginTop, '-100px');
    });
});