import { library } from '@fortawesome/fontawesome-svg-core'
// import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons'
import { faUser, faInfo, faPlay, faCopy, faHouse, fa1, fa2, faAdd, faHatWizard, faXmark, faArrowDown, faCheck, faArrowRight, faArrowLeft, faExclamationCircle, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = library;
icons.add(faUser, faInfo, faPlay, faCopy, faHouse, fa1, fa2, faAdd, faHatWizard, faXmark, faArrowDown, faCheck, faArrowRight, faArrowLeft, faExclamationCircle, faPenToSquare, faTrash);

export { FontAwesomeIcon, icons }