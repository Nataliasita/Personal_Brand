import { router } from './controls/router.js';

const init = () => {
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  
  function verificateUbicacation(hash, door){
        if ((hash == '')) {
          location.hash = '#home';
          door=false;
          router(hash, $containerGeneral);
        }
        else{
          if(door){
            router(hash, $containerGeneral);
            location.hash = '#home';
            router(hash, $containerGeneral);
          }
            else{
              location.hash = '#';
              router(hash, $containerGeneral);
            } 
          }
      }

  document.querySelector('.bigContainer').innerHTML = '';
  let hash = window.location.hash.substring(1);
  let door = true;
  verificateUbicacation(hash, door);

  window.addEventListener('hashchange', () => {
    hash = window.location.hash.substring(1);
    verificateUbicacation(hash, door);
  });
};

init();
