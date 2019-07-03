import React from 'react';
import renderer from 'react-test-renderer';

import { PostListItem } from '../../../app/components/PostList/PostListItem';

jest.mock('@material-ui/core/List', () => 'List');
jest.mock('@material-ui/core/ListItem', () => 'ListItem');
jest.mock('@material-ui/core/Divider', () => 'Divider');
jest.mock('@material-ui/core/ListItemText', () => 'ListItemText');
jest.mock('@material-ui/core/Typography', () => 'Typography');
jest.mock('@material-ui/core/IconButton', () => 'IconButton');
jest.mock('@material-ui/icons/Delete', () => 'DeleteIcon');
jest.mock('@material-ui/icons/Edit', () => 'EditIcon');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));
jest.mock('html-react-parser', () => jest.fn().mockReturnValue('Parsed value'));

describe('PostListItem', () => {
  const defaultProps = {
    post: {
      id: 1, content: 'content', title: 'title', date: '01/01/2019',
    },
    handleClick: jest.fn(),
    handleDeleteClick: jest.fn(),
    handleEditCallback: jest.fn(),
  };
  test('snapshot', () => expect(renderer.create(<PostListItem {...{ ...defaultProps }} />).toJSON()).toMatchSnapshot());
});
