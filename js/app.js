import { setDocumentHeight, setHTMLTitle } from "./utils/utils.js";

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */
let maquillagesClosed = 3;
let maquillagesOpened = 0;

let mariagesClosed = 8;
let mariagesOpened = 0;

let enfantsClosed = 3;
let enfantsOpened = 0;

let coursClosed = 3;
let coursOpened = 0;

/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

// INTERACTIONS UTILISATEUR -------------------------------

const onPrestationGroupClick = (blocName) => {
  
  const setBlocState = (bloc, opened, closed, caretName) => {
    const caret = document.getElementById(caretName);
    if (bloc.classList.contains('closed')) { 
      bloc.classList.replace('closed', 'opened');
      setPrestationGroupBlocHeight(bloc, opened, closed);
      caret.style.transform = 'rotate(180deg)';
    } else { 
      bloc.classList.replace('opened', 'closed'); 
      setPrestationGroupBlocHeight(bloc, 0, 0);
      caret.style.transform = 'rotate(0deg)';
    }
  }

  const bloc = document.getElementById(blocName);

  switch (blocName) {
    case 'maquillages':
      setBlocState(bloc,maquillagesOpened, maquillagesClosed, 'maquillagesCaret');
      break;
    case 'mariages':
      setBlocState(bloc,mariagesOpened, mariagesClosed, 'mariagesCaret');
      break;
    case 'enfants':
      setBlocState(bloc,enfantsOpened, enfantsClosed, 'enfantsCaret');
      break;
    case 'cours':
      setBlocState(bloc,coursOpened, coursClosed, 'coursCaret');
      break;
  
    default:
      break;
  }
}
window.onPrestationGroupClick = onPrestationGroupClick;

const onPrestationClick = (blocName) => {

  const setBlocState = (bloc, parentBlocName, caretName) => {
    const caret = document.getElementById(caretName);
      switch (parentBlocName) {
        case 'maquillages':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            maquillagesOpened += 1; maquillagesClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            maquillagesOpened -= 1; maquillagesClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocName), 
            maquillagesOpened, 
            maquillagesClosed);
          break;

        case 'mariages':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            mariagesOpened += 1; mariagesClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            mariagesOpened -= 1; mariagesClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocName), 
            mariagesOpened, 
            mariagesClosed);
          break;

        case 'enfants':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            caret.style.transform = 'rotate(180deg)';
            enfantsOpened += 1; enfantsClosed -= 1;
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            enfantsOpened -= 1; enfantsClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocName), 
            enfantsOpened, 
            enfantsClosed);
          break;

        case 'cours':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            caret.style.transform = 'rotate(180deg)';
            coursOpened += 1; coursClosed -= 1;
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            coursOpened -= 1; coursClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocName), 
            coursOpened, 
            coursClosed);
          break;
        default:
          break;
      }
    } 
  
  const bloc = document.getElementById(blocName);

  switch (blocName) {
    // MAQUILLAGES
    case 'maquillageJourNaturel':
      setBlocState(bloc, 'maquillages', `${blocName}Caret`);
      break;
    case 'maquillageJourSophistique':
      setBlocState(bloc, 'maquillages', `${blocName}Caret`);
      break;
    case 'maquillageSoiree':
      setBlocState(bloc, 'maquillages', `${blocName}Caret`);
      break;

    // MARIAGES
    case 'marieeNaturel':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'marieeSophistique':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'mariageSoiree':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    default:
      break;
  }
}
window.onPrestationClick = onPrestationClick;

// GÉNÉRATION DOM -----------------------------------------
const setPrestationGroupBlocHeight = (bloc, openedSubBlocsNumber, closedSubBlocsNumber) => {
  if (openedSubBlocsNumber == 0 && closedSubBlocsNumber == 0) {
    bloc.style.minHeight = 'var(--magic-height)';
    bloc.style.height = 'var(--magic-height)';
  } else {
    bloc.style.minHeight = `calc(var(--magic-height) + (${openedSubBlocsNumber} * (var(--presta-height) + 30px)) + (${closedSubBlocsNumber} * (60px  + 30px)) + 30px)`;
    bloc.style.height = `calc(var(--magic-height) + (${openedSubBlocsNumber} * (var(--presta-height) + 30px)) + (${closedSubBlocsNumber} * (60px  + 30px)) + 30px)`;
  }
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------
setDocumentHeight();

// Manuelle -----------------------------------------------
setHTMLTitle(`Opale Makeup - Maquillage professionnel à domicile - Calais`);

/* const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer'); */

