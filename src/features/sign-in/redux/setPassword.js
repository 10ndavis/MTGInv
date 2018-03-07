// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  SIGN_IN_SET_PASSWORD,
} from './constants';

export function setPassword(password) {
  return {
    type: SIGN_IN_SET_PASSWORD,
    password
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SIGN_IN_SET_PASSWORD:
      if (action.password) {
        return {
          ...state,
          password: action.password
        };
      } return {
        ...state
      };

    default:
      return state;
  }
}
