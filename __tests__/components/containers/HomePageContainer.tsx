import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { HomePageContainer } from '../../../app/components/containers/HomePageContainer';

jest.mock('@material-ui/core/Paper', () => 'Paper');
jest.mock('@material-ui/core/Fab', () => 'Fab');
jest.mock('@material-ui/core/Tooltip', () => 'Tooltip');
jest.mock('@material-ui/icons/Add', () => 'Add');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));
jest.mock('../../../app/components/PostList', () => 'PostList');
jest.mock('../../../app/components/AddPostDialog', () => 'AddPostDialog');

describe('HomePageContainer', () => {
  const defaultProps = {};

  const getShallowComponent = (props = defaultProps) => shallow(<HomePageContainer {...props} />);

  test('click fab', () => {
    const component = getShallowComponent();
    const addPostDialog: any = component.find('AddPostDialog');

    expect(addPostDialog.length).toBe(1);
    expect(addPostDialog.props().isOpen).toBe(false);

    component.find('Fab').simulate('click');
    expect((component.find('AddPostDialog') as any).props().isOpen).toBe(true);
  });

  test('snapshot', () => expect(renderer.create(<HomePageContainer />).toJSON()).toMatchSnapshot());
});
