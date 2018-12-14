import popup from '../../globally/popup/';
import alexContacts from '../../globally/popup/alexContacts';
import ourContacts from '../../globally/popup/ourContacts';

export default function efetoMainListeners() {
    writeUs.onclick = ((e) => { ourContacts(e) });
    orderSN.onclick = ((e) => { alexContacts(e) });
    makeSite.onclick = ((e) => alexContacts(e));
    makeScript.onclick = ((e) => alexContacts(e));
}