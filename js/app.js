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

// ----------------------------------------------------------------------------

const PRESTATIONS_PICTURES = [
  // Maquillages ------------------------------------------

  //  0 - jourNaturel
  [ 'jour', 'jour-2', 'jour-3', 'jour-4' ],
  
  //  1 - jourSophistique
  [ 'jour-sophistique', 'jour-sophistique-2', 'jour-sophistique-3', 'jour-sophistique-4' ],
  
  //  2 - soiree
  [ 'soiree-2', 'soiree', 'soiree-3', 'soiree-4' ],

  // Mariages ---------------------------------------------

  //  3 - marieeNaturel
  ['mariee-naturel', 'mariee-naturel-2', 'mariee-naturel-3', 'mariee-naturel-4'],
  
  //  4 - marieeSophistique
  ['mariage-sophistique', 'mariage-sophistique-2', 'mariage-sophistique-3', 'mariage-sophistique-4','mariage-sophistique-5'],
  
  //  5 - marieeNaturelLache
  ['laches', 'laches-3', 'laches-5'],
  
  //  6 - marieeNaturelAttache
  ['attaches', 'attaches-5', 'attaches-3', 'attaches-7'],
  
  //  7 - marieeSophistiqueLache
  ['laches-2', 'laches-4', 'laches-6'],
  
  //  8 - marieeSophistiqueAttache
  ['attaches-6', 'attaches-4', 'attaches-2', 'attaches-8'],
  
  //  9 - invitee
  ['maquillage-invites-1', 'maquillage-invites-2', 'maquillage-invites-3'],
  
  // 10 - forfaitInvitee
  ['coiffure-invites-1', 'coiffure-invites-2'],

  // Enfants ----------------------------------------------

  // XX - 
  ['enfants', 'enfants-2', 'enfants-3', 'enfants-4', 'enfants-5', 'enfants-6', 'enfants-7', 'enfants-8'],
  
  // XX - 
  ['evenementiel', 'evenementiel-2', 'evenementiel-3'],

  // Cours ------------------------------------------------

  // XX - individuelJour
  ['cours1', 'cours1', 'cours1', 'cours1'],
  
  // XX - individuelSoiree
  ['cours2', 'cours2', 'cours2', 'cours2'],
  
  // XX - collectif
  ['cours3', 'cours3', 'cours3', 'cours3'],
]

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
    case 'marieeNaturelLache':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'marieeNaturelAttache':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'marieeSophistiqueLache':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'marieeSophistiqueAttache':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'invitee':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    case 'forfaitInvitee':
      setBlocState(bloc, 'mariages', `${blocName}Caret`);
      break;
    default:
      break;
  }
}
window.onPrestationClick = onPrestationClick;

const onPictureClick = (picturesGroupIndex, pictureIndex) => {
  renderFullScreenPicture(picturesGroupIndex, pictureIndex);
}
window.onPictureClick = onPictureClick;

const closePhotoViewer = () => {
  document.getElementById('photoViewerContainer').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('photoViewerContainer').style.display = 'none';
  }, 200);
}
window.closePhotoViewer = closePhotoViewer;

const onPictureNavClick = (type, picturesGroupIndex, currentPictureIndex) => {
  const PICTURE_GROUP = PRESTATIONS_PICTURES[picturesGroupIndex];
  let newIndex = 0;
  if (type == 'previous') {
    if (currentPictureIndex == 0) {
      newIndex = PICTURE_GROUP.length - 1;
    } else {
      newIndex = currentPictureIndex - 1;
    }
  } else {
    if (currentPictureIndex == PICTURE_GROUP.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentPictureIndex + 1;
    }
  }

  document.getElementById('photoViewer').style.opacity = 0
  setTimeout(() => {
    document.getElementById('photoViewerContainer').innerHTML = `
    <div onclick="closePhotoViewer()" class="photo-viewer-background"></div>
    <div id="photoViewer" class="photo-viewer">
      <img src="./medias/images/prestations/${PICTURE_GROUP[newIndex]}.webp" />
      <button onclick="onPictureNavClick('previous', ${picturesGroupIndex}, ${newIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
      <button onclick="onPictureNavClick('next', ${picturesGroupIndex}, ${newIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
    </div>
    <button onclick="closePhotoViewer()" class="photo-viewer-close-button"><img src="./medias/images/font-awsome/plus.svg" /></button>
  `;
  }, 200);
}
window.onPictureNavClick = onPictureNavClick;

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

const renderFullScreenPicture = (picturesGroupIndex, pictureIndex) => {
  const PICTURE_GROUP = PRESTATIONS_PICTURES[picturesGroupIndex];
  document.getElementById('photoViewerContainer').style.display = 'flex';
  document.getElementById('photoViewerContainer').innerHTML = `
    <div onclick="closePhotoViewer()" class="photo-viewer-background"></div>
    <div id="photoViewer" class="photo-viewer">
      <img src="./medias/images/prestations/${PICTURE_GROUP[pictureIndex]}.webp" />
      <button onclick="onPictureNavClick('previous', ${picturesGroupIndex}, ${pictureIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
      <button onclick="onPictureNavClick('next', ${picturesGroupIndex}, ${pictureIndex})"><img src="./medias/images/font-awsome/caret-down.svg" /></button>
    </div>
    <button onclick="closePhotoViewer()" class="photo-viewer-close-button"><img src="./medias/images/font-awsome/plus.svg" /></button>
  `;
  setTimeout(() => {
    document.getElementById('photoViewerContainer').style.opacity = 1;
  }, 10);
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

