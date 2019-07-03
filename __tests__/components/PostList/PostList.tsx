import React from 'react';
import renderer from 'react-test-renderer';

import { PostList } from '../../../app/components/PostList/PostList';

jest.mock('@material-ui/core/Typography', () => 'Typography');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));
jest.mock('@kevinwang0316/react-materialui-pagination', () => 'Pagination');
jest.mock('../../../app/components/PostList/Dialogs/ReadDialog', () => 'ReadDialog');
jest.mock('../../../app/components/PostList/Dialogs/DeleteConfirmDialog', () => 'DeleteConfirmDialog');
jest.mock('../../../app/components/PostList/PostListItem', () => 'PostListItem');
jest.mock('../../../app/components/SuccessMessageSnackbar', () => 'SuccessMessageSnackbar');
jest.mock('../../../app/components/SuccessMessageSnackbar', () => 'SuccessMessageSnackbar');
jest.mock('../../../app/components/AddPostDialog', () => 'AddPostDialog');

describe('PostList', () => {
  const defaultProps = {
    posts: [{
      id: 1, content: 'content', title: 'title', date: '01/01/2019',
    }],
    postCount: 1,
    fetchPosts: jest.fn(),
    fetchPostCount: jest.fn(),
  };
  test('snapshot', () => expect(renderer.create(<PostList {...{ ...defaultProps }} />).toJSON()).toMatchSnapshot());
});
