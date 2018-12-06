import makeDOMelement from '../html/makeDOMelement';

describe('makeDOMelement', function() {
    it(`Проверка создания узла`, function() {
        assert.equal(makeDOMelement('р').outerHTML, '<р></р>');
        assert.equal(makeDOMelement('р', 'red', '').outerHTML, '<р class="red"></р>');
        assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
        assert.equal(makeDOMelement('р', 'red', 'Hi, world', '5').outerHTML, '<р class="red" id="5">Hi, world</р>');
        assert.equal(makeDOMelement('р', 'red big', 'Hi, world', '5').outerHTML, '<р class="red big" id="5">Hi, world</р>');
    });
});