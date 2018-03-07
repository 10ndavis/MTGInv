import { expect } from 'chai';

import {
  SIGN_IN_SET_PASSWORD,
} from 'src/features/sign-in/redux/constants';

import {
  setPassword,
  reducer,
} from 'src/features/sign-in/redux/setPassword';

describe('sign-in/redux/setPassword', () => {
  it('returns correct action by setPassword', () => {
    expect(setPassword()).to.have.property('type', SIGN_IN_SET_PASSWORD);
  });

  it('handles action type SIGN_IN_SET_PASSWORD correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SIGN_IN_SET_PASSWORD }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
