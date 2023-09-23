/** @format */

export function IsLoading() {
  return {
    type: "LOAD",
  };
}

export function StopLoading() {
  return {
    type: "STOP",
  };
}

export function IsLoadingCarlendar() {
  return {
    type: "LOADING_CARLENDAR",
  };
}

export function StopLoadingCarlendar() {
  return {
    type: "STOP_LOADING_CARLENDAR",
  };
}
