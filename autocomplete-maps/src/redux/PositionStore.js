import { combineReducers, createStore } from 'redux';

import { positionReducer, positionInitialState } from './PositionReducer';

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      position: positionReducer,
    }),

    {
      position: positionInitialState,
    },
  );

  return store;
};

export default configureStore;
