import popup from '../../globally/popUp';

export default function mainListeners() {
    mainContacts.onclick = ((e) => {
        const target = e.target;
        const action = target.getAttribute('data-contacts');
        if (action === 'alex-vk') window.open('https://vk.com/aaaparin', '_blank');
        if (action === 'alex-tel') window.open('https://t.me/aaaparin', '_blank');
        if (action === 'alex-sk') window.open('https://join.skype.com/invite/gAH0dYmscpwf', '_blank');
        if (action === 'alex-ph') document.body.appendChild(popup("Мой телефон: +7 920 671 7000. Звоните в рабочие дни с 10 до 18 МСК"));

        if (action === 'anna-wa') document.body.appendChild(popup("Мой Viber и WhatsApp:<br> +7 920 670 1712"));
        if (action === 'anna-vk') window.open('https://vk.com/id85981752', '_blank');
        if (action === 'anna-tel') document.body.appendChild(popup("Мой телеграм:<br> +7 920 670 1712"));
        if (action === 'anna-ph') document.body.appendChild(popup("Мой телефон: +7 920 670 1712.<br> Звоните в рабочие дни с 10 до 18 МСК"));
    });
    writeUs.onclick = (() => {
        document.body.appendChild(popup("", 300));
    });
}