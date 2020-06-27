import * as actionTypes from "./actionTypes";

export const changeSlide = (slideNo) => {
  return {
    type: actionTypes.slideLeft,
    payload: slideNo,
  };
};
