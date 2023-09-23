/** @format */

/**
 * Dialog message
 */

export function TurnOnDialog(title, content) {
  return {
    type: "ON",
    payload: {
      title: title,
      content: content,
    },
  };
}

export function TurnOffDialog() {
  return {
    type: "OFF",
    payload: null,
  };
}

/**
 * Dialog confirm
 */

export function showDialogConfirm(dataConfirm) {
  return {
    type: "SHOW_DIALOG_CONFIRM",
    payload: dataConfirm,
  };
}

export function hiddenDialogConfirm() {
  return {
    type: "HIDDEN_DIALOG_CONFIRM",
    payload: null,
  };
}
