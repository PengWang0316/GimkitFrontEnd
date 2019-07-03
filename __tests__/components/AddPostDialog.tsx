import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { AddPostDialog } from '../../app/components/AddPostDialog';

jest.mock('@material-ui/core/Button', () => 'Button');
jest.mock('@material-ui/core/Dialog', () => 'Dialog');
jest.mock('@material-ui/core/DialogActions', () => 'DialogActions');
jest.mock('@material-ui/core/DialogContent', () => 'DialogContent');
jest.mock('@material-ui/core/DialogTitle', () => 'DialogTitle');
jest.mock('@material-ui/core/TextField', () => 'TextField');
jest.mock('react-quill', () => 'ReactQuill');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));

describe('AddPostDialog', () => {
  const defaultProps = {
    isOpen: false,
    handleClose: jest.fn(),
    addNewPost: jest.fn(),
    post: null,
    updatePost: jest.fn(),
  };

  test('snapshot without a post', () => expect(renderer.create(<AddPostDialog {...{ ...defaultProps }} />).toJSON()).toMatchSnapshot());
  test('snapshot with a post', () => expect(renderer.create(<AddPostDialog {...{ ...defaultProps, post: { id: 1, title: 'title', content: 'content', date: '01/01/2019' } }} />).toJSON()).toMatchSnapshot());
});
