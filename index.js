import { router } from './controls/router.js';

const init = () => {
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  
  function verificateUbication(hash){
        if (hash == '' || hash == "#"){
          location.hash = '#home';
          door=false;
          router(hash, $containerGeneral);
        }
        else{
          router(hash, $containerGeneral);
            }
          }

  document.querySelector('.bigContainer').innerHTML = '';
  let hash = window.location.hash.substring(1);
  let door = true;
  verificateUbication(hash);

  window.addEventListener('hashchange', () => {
    document.querySelector('.bigContainer').innerHTML = '';
    hash = window.location.hash.substring(1);
    verificateUbication(hash, door);
  });
};

init();
