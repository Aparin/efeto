import efetoNavbarListeners from './efetoNavbsrListeners';
import '../../../dist/stylesAndScripts/cerulean-bootstrap.css';
import '../../../dist/stylesAndScripts/icon.css';

const navbarEfeto =
    ` <header>
<!-- Срытое под решёткой описание с контактами -->
<div class="collapse " id="navbarHeader">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
                <h2>О нас:</h2>
                <h4>Мы небольшая семейная компания. <br> Александр делает сайты и программирует, <br> Анна занимается копирайтингом и соц. сетями.
                </h4>
            </div>
            <div id="mainContacts" class="col-sm-5  py-5">
                <h2>Контакты:</h2>
                <h4 class="btn-group">Александр:
                    <a class="socBtn"><i data-contacts="alex-tel" class="fa fa-paper-plane fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="alex-vk" class="fa fa-vk fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="alex-sk" class="fa fa-skype fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="alex-ph" class="fa fa-phone fa-1x"></i></a>
                </h4>
                <br />
                <h4 class="btn-group">Анна:
                    <a class="socBtn"><i data-contacts="anna-wa" class="fa fa-whatsapp fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="anna-vk" class="fa fa-vk fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="anna-tel" class="fa fa-paper-plane fa-1x"></i></a>
                    <a class="socBtn"><i data-contacts="anna-ph" class="fa fa-phone fa-1x"></i></a>
                </h4>
            </div>
        </div>
    </div>
</div>

<!-- Header -->
<nav class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
            <h2>Efeto.ru: веб под ключ</h2>
        </a>
        <button class="navbar-toggler btn-warning  disabled" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
</header>
`;
document.querySelector('body').insertAdjacentHTML('afterbegin', navbarEfeto);
efetoNavbarListeners();