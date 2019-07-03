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
  test('snapshot', () => expect(renderer.create(<HomePageContainer />).toJSON()).toMatchSnapshot());
});
