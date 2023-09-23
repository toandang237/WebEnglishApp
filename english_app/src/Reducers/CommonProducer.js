/** @format */

/*-----------------------------*/
const IsSave = false;
const countUpdateItem = 0;
const initState = {
  load: false,
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
