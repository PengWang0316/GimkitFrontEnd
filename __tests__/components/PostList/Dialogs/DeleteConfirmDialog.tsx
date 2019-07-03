import React from 'react';
import renderer from 'react-test-renderer';

import { DeleteConfirmDialog } from '../../../../app/components/PostList/Dialogs/DeleteConfirmDialog';

jest.mock('@material-ui/core/Dialog', () => 'Dialog');
jest.mock('@material-ui/core/DialogTitle', () => 'DialogTitle');
jest.mock('@material-ui/core/DialogContent', () => 'DialogContent');
jest.mock('@material-ui/core/DialogContentText', () => 'DialogContentText');
jest.mock('@material-ui/core/DialogActions', () => 'DialogActions');
jest.mock('@material-ui/core/Button', () => 'Button');
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));

describe('DeleteConfirmDialog', () => {
  const defaultProps = {
    isOpen: true,
    handleClose: jest.fn(),
    postId: 1,
    handleSnackBarCallback: jest.fn(),
    deletePost: jest.fn(),
  };
  test('snapshot', () => expect(renderer.create(<DeleteConfirmDialog {...{ ...defaultProps }} />).toJSON()).toMatchSnapshot());
});
