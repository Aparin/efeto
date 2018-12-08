import popup from '../../globally/popUp';

export default function mainListeners() {
    mainContacts.onclick = ((e) => {
        const target = e.target;
        const action = target.getAttribute('data-contacts');
        if (action === 'alex-vk') window.open('https://vk.com/aaaparin', '_blank');
        if (action === 'alex-tel') window.open('https://t.me/aaaparin', '_blank');
        if (action === 'alex-sk') window.open('https://join.skype.com/invite/gAH0dYmscpwf', '_blank');
        if (action === 'alex-ph') document.body.appendChild(popup("Мой телефон: +7 920 671 7000. Звоните в рабочие дни с 10 до 18 МСК"));
    });


    // const mainContacts = document.getElementById('mainContacts');
    /*
        mainContacts.onclick = function(e) {
            console.log('Click');
            const target = e.target;
            const action = target.getAttribute('main-contacts');
            if (action === 'alex-vk') console.log('Its working');
            /*
                    if (action == 'delete') { deleteSticker(target.parentNode.id); }
                    if (action == 'edit') {
                        if (document.getElementById(`adress${target.parentNode.id}`)) {
                            editMapSticker(target.parentNode.id);
                        } else {
                            editSticker(target.parentNode.id);
                        }
                    }
                    
        };*/
    /*
        field.addEventListener('mousedown', function(e) {
            let target = e.target;
            while (target != document) {
                const dataAction = target.getAttribute('data-action');
                const style = target.getAttribute('class');
                if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' ||
                    dataAction == 'close') { return }
                if (dataAction == 'sticker' && style != 'editSticker' && style != 'editMapSticker') {
                    if (event.which == 1) moveTheSticker(target.id);
                    return;
                }
                target = target.parentNode;
            }
        });
        */
}