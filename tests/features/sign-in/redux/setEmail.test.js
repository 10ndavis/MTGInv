import { expect } from 'chai';

import {
  SIGN_IN_SET_EMAIL,
} from 'src/features/sign-in/redux/constants';

import {
  setEmail,
  reducer,
} from 'src/features/sign-in/redux/setEmail';

describe('sign-in/redux/setEmail', () => {
  it('returns correct action by setEmail', () => {
    expect(setEmail()).to.have.property('type', SIGN_IN_SET_EMAIL);
  });

  it('handles action type SIGN_IN_SET_EMAIL correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGN_IN_SET_EMAIL }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
