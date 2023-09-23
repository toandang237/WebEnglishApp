/** @format */

/*Click on tab*/

export function TabAC(title, content) {
  return {
    type: "TC",
  };
}

export function TabST() {
  return {
    type: "ST",
  };
}

export function TabFO() {
  return {
    type: "ST",
  };
}

export function TabCL() {
  return {
    type: "ST",
  };
}

/*check save lesson*/
export function SaveLesson() {
  return {
    type: "SAVE_LESSON",
  };
}

export function SaveLessonFinish() {
  return {
    type: "SAVE_LESSON_FINISH",
  };
}

/**Xác định vị trí lưu từ  */
export function WordIndex(value) {
  return {
    type: "INCREASE_INDEX_UPDATE",
    value: value,
  };
}

export function WordIndexDefaul() {
  return {
    type: "SET_INDEX_DEFAULT",
    value: 0,
  };
}
