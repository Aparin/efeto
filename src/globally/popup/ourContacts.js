import popup from './popup';

const ourContacts = (e) => {
    popup({
        msg: `
  <p><b>Александр</b> <br> (сайты, программирование):
  <a href="https://t.me/aaaparin" target="_black">Телеграм</a>, <a href="https://vk.com/aaaparin" target="_black">ВКонтакте</a>, <a href="https://join.skype.com/invite/gAH0dYmscpwf" target="_black">Skype</a><br>
  Почта: mail@efeto.ru <br>
  Телефон: +7 920 671 7000. Рабочие дни с 10 до 18 МСК</p>
    
  <p><b>Анна</b> (копирайтинг, соц. сети): <br>
  Viber, WhatsApp, Телеграмм, телефон: +7 920 670 1712. <br>
  Почта: mail@efeto.ru <a href="https://vk.com/id85981752" target="_black">ВКонтакте</a><br>
  Пишите и звоните в рабочие дни с 10 до 18 МСК.</p>
  `,
        height: 360,
        e: e
    });
}

export default ourContacts;