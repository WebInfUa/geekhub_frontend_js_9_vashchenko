import '../../assets/images/logo.png';
import '../../assets/images/search.png';
import '../../assets/images/ring.png';
import '../../assets/images/photo.png';
import {CreateElement} from "../func/createElement";


export function header() {
  let logoHeader = new CreateElement();
  logoHeader.addDiv('header', 'headerLogo', 'logo');
  logoHeader.addLink('headerLogo', 'headerLogoLink', 'logo__link', '/');
  logoHeader.addImage('headerLogoLink', 'logoImg', 'logo__img', 'images/logo.png', 'Our app title - Virtus');


  let headerBtn = new CreateElement();
  headerBtn.addInput('header', 'addBtnHeader', 'addBtnHeade', 'button', '+Add', 'text in placeholder', 'inputClass', 'lableClass', 'Lable title text', '', {display: 'none'});

  let headerSysBtn = new CreateElement();
  headerSysBtn.addImage('header', 'searchImg', 'search__img', 'images/search.png', 'Our app title - Virtus');
  headerSysBtn.addImage('header', 'ringImg', 'ring__img', 'images/ring.png', 'Our app title - Virtus');

  let headerMyAccount = new CreateElement();
  headerMyAccount.addImage('header', 'photoImg', 'photo__img', 'images/photo.png', 'Our app title - Virtus');

}
