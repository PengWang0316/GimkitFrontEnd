import React from 'react';
import renderer from 'react-test-renderer';

import { ReadDialog } from '../../../../app/components/PostList/Dialogs/ReadDialog';

jest.mock('@material-ui/core/Dialog', () => 'Dialog');
jest.mock('@material-ui/core/DialogTitle', () => 'DialogTitle');
jest.mock('@material-ui/core/DialogContent', () => 'DialogContent');
jest.mock('@material-ui/core/DialogContentText', () => 'DialogContentText');
jest.mock('@material-ui/core/DialogActions', () => 'DialogActions');
jest.mock('@material-ui/core/Button', () => 'Button');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));
jest.mock('html-react-parser', () => jest.fn().mockReturnValue('Parsed value'));

describe('ReadDialog', () => {
  const defaultProps = {
    post: {
      id: 1, content: 'content', title: 'title', date: '01/01/2019',
    },
    handleClose: jest.fn(),
    isOpen: true,
  };
  test('snapshot', () => expect(renderer.create(<ReadDialog {...{ ...defaultProps }} />).toJSON()).toMatchSnapshot());
});
