import * as actionTypes from './actionTypes';

export const initialState = {
  navOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAV_OPEN:
      return { ...state, navOpen: true };
    case actionTypes.NAV_CLOSED:
        return { ...state, navOpen: false };
    default:
      return state;
  }
};

export default reducer;
