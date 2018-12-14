import popup from './popup';

const annaContacts = (e) => {
    popup({
        msg: `
    <p><b>Анна</b> (копирайтинг, соц. сети): <br>
    Viber, WhatsApp, Телеграмм, телефон: +7 920 670 1712. <br>
    Почта: anna@efeto.ru. <a href="https://vk.com/id85981752" target="_black">ВКонтакте</a><br>
    Пишите и звоните в рабочие дни с 10 до 18 МСК.</p>
    `,
        height: 200,
        e: e
    });
}

export default annaContacts;