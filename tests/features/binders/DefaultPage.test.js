import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { DefaultPage } from 'src/features/binders/DefaultPage';

describe('binders/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      binders: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.binders-default-page').getElement()
    ).to.exist;
  });
});
