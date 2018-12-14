import mkNode from '../../efeto/makeNode';
import '../../start/cerulean-bootstrap.css';
import '../../efeto/efetoNavbar/efetoNavbar';
import footer from '../../efeto/footer';
import annaContacts from '../../globally/popup/annaContacts';


const imgSmm = mkNode({ tg: 'img', src: '../../src/pages/smm/img/maed.jpeg', classes: 'card-img-top', maxWidth: '960px', height: 'auto', margin: 'auto' });

const smm = `

<!-- SMM -->
<h1 style="margin: 2rem; text-align:center; font-size: 3rem; line-height: 3rem;">Посты для ваших групп в соц. сетях</h1>

<div class="album py-5 bg-light" style="padding-top: 0.5rem !important;">
  <div class="container ">
    <div class="row ">
    
      <div class="col-md-12 text-center">
      
          <div class="card mb-6 shadow-sm ">
              
                  <h2 style="margin: 15px; " class="success";>Пример контентного поста с мягкой продажей в конце:</h2>          
        ${imgSmm.outerHTML}
        <div class="card-body ">
            
            <div class="d-flex justify-content-between align-items-center ">
                <div class="btn-block" style="margin: 0 auto;">
                    <button id="orderSMM" type="button" class="btn btn-lg btn-success" style="margin: 5px;">Заказать пост <br> или ведение группы</button>                 
                </div>

            </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
`;
document.querySelector('body').insertAdjacentHTML('beforeend', smm);
orderSMM.onclick = ((e) => { annaContacts(e) });

footer();