import { expect } from 'chai';
import reducer from 'src/features/sign-in/redux/reducer';

describe('sign-in/redux/reducer', () => {
  it('does nothing if no matched action', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: '__UNKNOWN_ACTION_TYPE__' }
    );
    expect(state).to.equal(prevState);
  });

  // TODO: add global reducer test if needed.
});