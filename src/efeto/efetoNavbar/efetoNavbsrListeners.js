import popup from '../../globally/popup/';

export default function efetoNavbarListeners() {
    mainContacts.onclick = ((e) => {
        const target = e.target;
        const action = target.getAttribute('data-contacts');
        if (action === 'alex-vk') window.open('https://vk.com/aaaparin', '_blank');
        if (action === 'alex-tel') window.open('https://t.me/aaaparin', '_blank');
        if (action === 'alex-sk') window.open('https://join.skype.com/invite/gAH0dYmscpwf', '_blank');
        if (action === 'alex-ph') popup({ msg: "Мой телефон: +7 920 671 7000. Звоните в рабочие дни с 10 до 18 МСК", e: e });

        if (action === 'anna-wa') popup({
            msg: `
                <a href='viber://chat?number=79206701712' target='_blank' style='font-size: 1.5rem;';>Viber</a>, 
                <br>
                <a href='https://api.whatsapp.com/send?phone=79206701712' target='_blank' style='font-size: 1.5rem;'>WhatsApp</a>`,
            e: e
        });
        if (action === 'anna-vk') window.open('https://vk.com/id85981752', '_blank');
        if (action === 'anna-tel') popup({ msg: "Мой телеграм:<br> +7 920 670 1712", e: e });
        if (action === 'anna-ph') popup({ msg: "Мой телефон: +7 920 670 1712.<br> Звоните в рабочие дни с 10 до 18 МСК", e: e });
    });

}