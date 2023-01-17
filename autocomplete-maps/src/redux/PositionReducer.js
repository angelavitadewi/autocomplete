import * as ActionType from './ActionType';

export const positionInitialState = {
  lat: 0,
  lng: 0,
};

export const positionReducer = (state = positionInitialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_LAT:
      return { ...state, lat: payload };
    case ActionType.SET_LNG:
      return { ...state, lng: payload };
    default:
      return state;
  }
};
