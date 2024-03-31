import { setHTMLTitle } from "./utils/utils.js";

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */
let maquillagesClosed = 4;
let maquillagesOpened = 0;

let mariagesClosed = 8;
let mariagesOpened = 0;

let mainsClosed = 11;
let mainsOpened = 0;

let epilationClosed = 6;
let epilationOpened = 0;

let enfantsClosed = 2;
let enfantsOpened = 0;

let coursClosed = 6;
let coursOpened = 0;

// ----------------------------------------------------------------------------

const PRESTATIONS_PICTURES = [
  // Maquillages ------------------------------------------

  //  0 - jourNaturel
  [ 'jour', 'jour-2', 'jour-3', 'jour-4' ],
  
  //  1 - jourSophistique
  [ 'jour-sophistique', 'jour-sophistique-2', 'jour-sophistique-3', 'jour-sophistique-4' ],
  
  //  2 - soiree
  [ 'soiree-2', 'soiree', 'soiree-3', 'soiree-4', 'soiree-5', 'soiree-6' ],

  //  3 - evenementiel
  ['evenementiel', 'evenementiel-2', 'evenementiel-3', 'evenementiel-5', 'evenementiel-6', 'evenementiel-7', 'evenementiel-8', 'evenementiel-9'],

  // Mariages ---------------------------------------------

  //  4 - marieeNaturel
  ['mariee-naturel', 'mariee-naturel-2', 'mariee-naturel-3', 'mariee-naturel-4'],
  
  //  5 - marieeSophistique
  ['mariage-sophistique', 'mariage-sophistique-2', 'mariage-sophistique-3', 'mariage-sophistique-4','mariage-sophistique-5'],
  
  //  6 - marieeNaturelLache
  ['laches', 'laches-3', 'laches-5'],
  
  //  7 - marieeNaturelAttache
  ['attaches', 'attaches-5', 'attaches-3', 'attaches-7', 'attaches-9'],
  
  //  8 - marieeSophistiqueLache
  ['laches-2', 'laches-4', 'laches-6'],
  
  //  9 - marieeSophistiqueAttache
  ['attaches-6', 'attaches-4', 'attaches-2', 'attaches-8', 'attaches-10'],
  
  // 10 - invitee
  ['maquillage-invites-1', 'maquillage-invites-2', 'maquillage-invites-3', 'maquillage-invites-4', 'maquillage-invites-5'],
  
  // 11 - forfaitInvitee
  ['coiffure-invites-1', 'coiffure-invites-2', 'coiffure-invites-3', 'coiffure-invites-4', 'coiffure-invites-5'],

  // Mains ------------------------------------------------

  // XX - Presta 1
  //['coiffure-invites-1', 'coiffure-invites-2', 'coiffure-invites-3', 'coiffure-invites-4', 'coiffure-invites-5'],
  
  // Epilation --------------------------------------------

  // XX - Presta 1
  //['coiffure-invites-1', 'coiffure-invites-2', 'coiffure-invites-3', 'coiffure-invites-4', 'coiffure-invites-5'],
  
  // Enfants ----------------------------------------------

  // 12 - enfantsParticuliers
  ['enfants', 'enfants-2', 'enfants-3', 'enfants-4', 'enfants-5', 'enfants-6', 'enfants-7', 'enfants-8'],

  // 13 - enfantsEntreprise
  ['enfants-9', 'enfants-10', 'enfants-11', 'enfants-12', 'enfants-13', 'enfants-14', 'enfants-15', 'enfants-16', 'enfants-17'],
  
  
  // Cours ------------------------------------------------

  // XX - coursMaquilageJour
  /* ['cours1', 'cours1', 'cours1', 'cours1'],
  
  // XX - individuelSoiree
  ['cours2', 'cours2', 'cours2', 'cours2'],
  
  // XX - collectif
  ['cours3', 'cours3', 'cours3', 'cours3'], */
]

/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

// INTERACTIONS UTILISATEUR -------------------------------

const onMainIntroClick = () => {
  const bloc = document.getElementById('mainIntro');

  if (bloc.classList.contains('closed')) {
    bloc.classList.replace('closed', 'opened');
    bloc.style.minHeight = 'calc(3 * var(--magic-height))';
    bloc.style.height = 'calc(3 * var(--magic-height))';
  } else {
    bloc.classList.replace('opened', 'closed');
    bloc.style.minHeight = 'var(--magic-height)';
    bloc.style.height = 'var(--magic-height)';
  }
}
window.onMainIntroClick = onMainIntroClick;

const onPrestationGroupClick = (blocId) => {
  
  const setBlocState = (bloc, opened, closed, caretName) => {
    const caret = document.getElementById(caretName);

    if (bloc.classList.contains('closed')) { 
      bloc.classList.replace('closed', 'opened');
      setPrestationGroupBlocHeight(bloc, opened, closed);
      caret.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        bloc.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 200);
    } else { 
      bloc.classList.replace('opened', 'closed'); 
      setPrestationGroupBlocHeight(bloc, 0, 0);
      caret.style.transform = 'rotate(0deg)';
    }
  }

  const bloc = document.getElementById(blocId);

  switch (blocId) {
    case 'maquillages':
      setBlocState(bloc,maquillagesOpened, maquillagesClosed, 'maquillagesCaret');
      break;
    case 'mariages':
      setBlocState(bloc,mariagesOpened, mariagesClosed, 'mariagesCaret');
      break;
    case 'mains':
      setBlocState(bloc,mainsOpened, mainsClosed, 'mainsCaret');
      break;
    case 'epilation':
      setBlocState(bloc,epilationOpened, epilationClosed, 'epilationCaret');
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

  /* document.getElementById('main').scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  }); */

  //
}
window.onPrestationGroupClick = onPrestationGroupClick;

const onPrestationClick = (blocId) => {

  const setBlocState = (bloc, parentBlocId, caretName) => {
    const caret = document.getElementById(caretName);
      switch (parentBlocId) {
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
            document.getElementById(parentBlocId), 
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
            document.getElementById(parentBlocId), 
            mariagesOpened, 
            mariagesClosed);
          break;

        case 'mains':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            mainsOpened += 1; mainsClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            mainsOpened -= 1; mainsClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            mainsOpened, 
            mainsClosed);
          break;
        case 'epilation':
          if (bloc.classList.contains('closed')) { 
            bloc.classList.replace('closed', 'opened');
            epilationOpened += 1; epilationClosed -= 1;
            caret.style.transform = 'rotate(180deg)';
          } else { 
            bloc.classList.replace('opened', 'closed'); 
            epilationOpened -= 1; epilationClosed += 1;
            caret.style.transform = 'rotate(0deg)';
          }
          setPrestationGroupBlocHeight(
            document.getElementById(parentBlocId), 
            epilationOpened, 
            epilationClosed);
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
            document.getElementById(parentBlocId), 
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
            document.getElementById(parentBlocId), 
            coursOpened, 
            coursClosed);
          break;
        default:
          break;
      }
    } 
  
  const bloc = document.getElementById(blocId);

  switch (blocId) {
    // MAQUILLAGES
    case 'maquillageJourNaturel':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'maquillageJourSophistique':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'maquillageSoiree':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;
    case 'evenementiel':
      setBlocState(bloc, 'maquillages', `${blocId}Caret`);
      break;

    // MARIAGES
    case 'marieeNaturel':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistique':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeNaturelLache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeNaturelAttache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistiqueLache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'marieeSophistiqueAttache':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'invitee':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    case 'forfaitInvitee':
      setBlocState(bloc, 'mariages', `${blocId}Caret`);
      break;
    
    // MAINS
    case 'semiPermanent':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'semiPermanentFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'forfaitSemiPermanent':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'forfaitFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsules':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsulesCouleurUnie':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'capsulesFrench':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'depose':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'decoration':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'soinSimple':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    case 'soinComplet':
      setBlocState(bloc, 'mains', `${blocId}Caret`);
      break;
    
    // EPILATION
    case 'levreSuperieure':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'menton':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'sourcils':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'forfaitx2':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'forfaitx3':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    case 'coursSourcils':
      setBlocState(bloc, 'epilation', `${blocId}Caret`);
      break;
    
    // ENFANTS
    case 'enfantsParticuliers':
      setBlocState(bloc, 'enfants', `${blocId}Caret`);
      break;
    case 'enfantsEntreprise':
      setBlocState(bloc, 'enfants', `${blocId}Caret`);
      break;

    // COURS
    case 'coursMaquilageJour':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursMaquilageSoiree':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursPersonnalise':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'coursColorimetrie':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'masterclass':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
      break;
    case 'evjf':
      setBlocState(bloc, 'cours', `${blocId}Caret`);
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

// Manuelle -----------------------------------------------
setHTMLTitle(`Opale Makeup - Maquillage professionnel à domicile - Calais`);
