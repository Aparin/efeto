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
            <a id="makeSite" style="color: white; cursor: pointer; font-size: 2.2rem; line-height: 2.2rem; padding: 2.2rem;" class="list-group-item list-group-item-action active">
                Сделать интернет-магазин или сайт
            </a>
            <a href="pages/sn/index.html" style="font-size: 2rem; line-height: 2rem;" class="list-group-item list-group-item-action">
               Сделать большое веб-приложение 
                <p style="font-size: 1.4rem; line-height: 1.4rem; margin-top: 0.4rem;">например, удобную систему виртуальных записок с быстрым поиском</p>
            </a>
            <a id="makeScript" style="color: white; cursor: pointer; font-size: 2rem; line-height: 2rem;" class="list-group-item list-group-item-action active">
                Написать скрипт для сайта
                <p style="font-size: 1.4rem; line-height: 1.4rem; margin-top: 0.4rem;">Калькуляторы, тесты, графики, управление рекламой и т.д.</p>
            </a>
            <a  href="pages/smm.html" style="cursor: pointer; font-size: 2rem; line-height: 2rem;"  class="list-group-item list-group-item-action">
                Копирайтинг и соц. сети
                <p style="font-size: 1.4rem; line-height: 1.4rem; margin-top: 0.4rem;">Написать продающий текст, серию e-mail писем или постов в соц. сети</p>
            </a>
        </div>
        <p style="margin-top: 20px;">
            <button id="writeUs" class="btn btn-info btn-lg my-2 ">Задать вопрос / сделать заказ</button>

        </p>
    </section>

    <!---------------------- Примеры работ ---------------------->
    <div class="album py-5 bg-light" style="padding-top: 1rem !important;">
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
                        <h2 style="margin: 15px;">Посты для ваших групп в соц. сетях</h2>
                                        
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