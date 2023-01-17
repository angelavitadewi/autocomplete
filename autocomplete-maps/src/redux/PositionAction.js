import * as ActionType from './ActionType';

export const setPosition = (dispatch, lat, lng) => {
  dispatch({ type: ActionType.SET_LAT, payload: lat });
  dispatch({ type: ActionType.SET_LNG, payload: lng });
};
