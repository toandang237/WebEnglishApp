/** @format */

var listMessage = {
  M0001: "Can't be left blank!",
  M0002: "An error occurred during processing, please try again!",
  M0003: "You do not have permission to delete!",
  M0004: "You do not have the right to edit!",
  M0005: "Not found!",
  M0006: "Your data has been saved.",
  M0007: "Oops! Something went wrong ...",
};

var listTitle = {
  T0001: "Create a new study set",
};

const getMessage = (errorCode, isMsg = true) => {
  if (isMsg) return listMessage[errorCode];
  else return listTitle[errorCode];
};

export default getMessage;
