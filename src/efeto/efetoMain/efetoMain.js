import efetoMainListeners from './efetoMainListeners';
import mkNode from '../makeNode';


const snImg = mkNode({ tg: 'img', src: '../src/efeto/img/sn.png', classes: 'card-img-top', maxWidth: '420px', height: 'auto', margin: 'auto' });
const minSmm = mkNode({ tg: 'img', src: '../src/pages/smm/img/maed-mini.jpeg', classes: 'card-img-top', maxWidth: '649px', height: 'auto', margin: 'auto' });


const efetoMain =
    ` <!-------------------------- Content area ----------------------------------->

<main role="main">

    <section class="conteiner text-center ">
        <h1 style="margin: 2rem; text-align:center; font-size: 3rem; line-height: 3rem;">Чем мы можем вам помочь?</h1>
        <div class="list-group col-lg-7">
            <a id="makeSite" style="color: white; cursor: pointer;" class="list-group-item list-group-item-action active">
                <strong><big>Сделать интернет-магазин или сайт</big></strong>
                <p>Быстрые самописные; на CMS: Woocommerce, WordPress, Joomla; комбинированные.</p>
            </a>
            <a href="pages/sn/index.html" class="list-group-item list-group-item-action">
                <strong><big>Сделать большое веб-приложение
                    </big>
                    </strong>
                <p>например, удобную систему виртуальных записок с быстрым поиском</p>
            </a>
            <a href="" class="list-group-item list-group-item-action active">
                <strong><big>Написать скрипт</big></strong>
                <p>Калькуляторы, тесты, графики, управление рекламой и т.д.</p>
            </a>
            <a href="" class="list-group-item list-group-item-action">
                <strong><big>Провести рекламную компанию </big></strong>
                <p>Написать продающий текст, настроить контекстную рекламу, написать серию e-mail писем и постов в соц. сети</p>
            </a>
        </div>
        <p style="margin-top: 20px;">
            <button id="writeUs" class="btn btn-warning btn-lg my-2 ">Задать вопрос / сделать заказ</button>

        </p>
    </section>

    <!---------------------- Примеры работ ---------------------->
    <div class="album py-5 bg-light ">
        <div class="container ">
            <!--stickyNotes -->
            <div class="row ">
                <div class="col-md-12 text-center">
                    <div class="card mb-6 shadow-sm ">
                        <h2 style="margin: 15px;">StickyNotes: веб-приложение для коротких записок с поиском</h2>                      
                        <p class="text-info"> <big><strong>Поиск по ключевым словам, заголовкам, содержимому. Вы быстро найдёте свою записку спустя годы!</strong></big></p>
                        ${snImg.outerHTML}
                                           
                        <div class="card-body ">       
                            <div class="d-flex justify-content-between align-items-center ">
                                <div class="btn-block" style="margin: 0 auto;">
                                    <button id="orderSN" type="button" class="btn btn-lg btn-primary" style="margin: 5px;">Заказать такое же</button>
                                    <a href="pages/sn/index.html" type="button" class="btn btn-lg btn-warning" style="margin: 5px;">Посмотреть в работе</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- SMM -->
                <div class="col-md-12 text-center">
                    <div class="card mb-6 shadow-sm ">
                        <h2 style="margin: 15px;">Посты (в т.ч. продающие) для ваших групп в соц. сетях</h2>
                                        
                        ${minSmm.outerHTML}
                        <div class="card-body ">
                            
                            <div class="d-flex justify-content-between align-items-center ">
                                <div class="btn-block" style="margin: 0 auto;">                               
                                    <a href="pages/smm.html" type="button" class="btn btn-lg btn-warning" style="margin: 5px;">Прочитать полностью</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

</main>
`;
document.querySelector('body').insertAdjacentHTML('beforeend', efetoMain);
efetoMainListeners();