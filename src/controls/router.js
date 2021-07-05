import { renderHome, renderWork} from '../components/renderViews.js';

export function router(hash, $containerGeneral) {
  
  switch (hash) {
    case 'home':
      renderHome($containerGeneral);
      break;
    case 'work':
      renderWork($containerGeneral);
      break;
  }
}
