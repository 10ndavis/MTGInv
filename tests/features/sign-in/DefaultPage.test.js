import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/sign-in/DefaultPage';

describe('sign-in/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      signIn: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.sign-in-default-page').getElement()
    ).to.exist;
  });
});
