/** @format */

import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { DialogLoginReducer } from "./DialogLoginReducer";
import { DialogSignupReducer } from "./DialogSignupReducer";
import { LoadingReducer } from "./LoadingReducer";
import { LoadingCarlendarReducer } from "./LoadingCarlendarReducer";
import { DialogMessageReducer } from "./DialogMessageReducer";
import { SetIndexReducer } from "./SetIndexReducer";
import {
  CheckSave,
  WordCount,
  onOffNewFolder,
  onOffNewSet,
} from "./CommonProducer";
import { DialogConfirmReducer } from "./DialogConfirmReducer";
const rootReducer = combineReducers({
  user: UserReducer,
  showLogin: DialogLoginReducer,
  showSignup: DialogSignupReducer,
  load: LoadingReducer,
  loadingCarlendar: LoadingCarlendarReducer,
  dialog: DialogMessageReducer,
  indexTab: SetIndexReducer,
  checkSaveLesson: CheckSave,
  countWord: WordCount,
  dialogConfirm: DialogConfirmReducer,
  isTurnOnNewSet: onOffNewSet,
  isTurnOnNewFolder: onOffNewFolder,
});

export default rootReducer;
