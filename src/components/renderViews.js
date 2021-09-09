import { home_desktop } from '../views/home_desktop.js';
import { home_mobile } from '../views/home_mobile.js';
import '../components/desktop-menu.js';
import '../components/mobile-menu.js';
//import '../components/footer.js';
import { home1 }from '../components/home1.js'
import { home2 }from '../components/home2.js'
import { work } from '../components/work_section.js';
import { homeSnow } from '../components/snow.js';



export function renderHome($containerGeneral){
  Menu($containerGeneral);
  home1($containerGeneral);
  home2($containerGeneral);
  $containerGeneral.innerHTML +=homeSnow();
}
export function renderContact($containerGeneral){
  Menu($containerGeneral);
  home1($containerGeneral);
  home2($containerGeneral);
  $containerGeneral.innerHTML +=homeSnow();
}

export function renderWork($containerGeneral){
  Menu($containerGeneral);
  work($containerGeneral);
}

export function Menu($containerGeneral) {
  const mql = window.matchMedia('(max-width: 768px)');
  function pantalla(mobileView) {
    if (mobileView) {
      $containerGeneral.innerHTML= home_mobile();    
    } else {
      $containerGeneral.innerHTML= home_desktop();
    }
  }
  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    pantalla(mobileView);
    location.reload();
  });
  const mobileView = mql.matches;
  pantalla(mobileView);
}