/** @format */

/*-----------------------------*/
const IsSave = false;
const countUpdateItem = 0;
const init1 = {
  isTurnOn: false,
};

const init2 = {
  isTurnOn: false,
};
/*-----------------------------*/

// Check tiến hành lưu lesson
export function CheckSave(state = IsSave, action) {
  switch (action.type) {
    case "SAVE_LESSON":
      return true;
    case "SAVE_LESSON_FINISH":
      return false;
    default:
      return state;
  }
}

// Xác định vị trí từ đang lưu
export function WordCount(state = countUpdateItem, action) {
  switch (action.type) {
    case ("INCREASE_INDEX_UPDATE", "SET_INDEX_DEFAULT"):
      return action.value;
    default:
      return state;
  }
}

// bật tắt create set
export function onOffNewSet(state = init1, action) {
  switch (action.type) {
    case "TURN_ON_NEW_SET":
      return {
        ...state,
        isTurnOn: true,
      };
    case "TURN_OFF_NEW_SET":
      return {
        ...state,
        isTurnOn: false,
      };
    default:
      return state;
  }
}

// bật tắt create folder
export function onOffNewFolder(state = init1, action) {
  switch (action.type) {
    case "TURN_ON_NEW_FOLDER":
      return {
        ...state,
        isTurnOn: true,
      };
    case "TURN_OFF_NEW_FOLDER":
      return {
        ...state,
        isTurnOn: false,
      };
    default:
      return state;
  }
}
