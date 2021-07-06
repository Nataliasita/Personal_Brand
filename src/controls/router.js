import { renderContact, renderHome, renderWork} from '../components/renderViews.js';


export function router(hash, $containerGeneral) {
  
  switch (hash) {
    case 'work':
      renderWork($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral);
      break;
    case 'contact':
      renderContact($containerGeneral);
      break;
  }
}
