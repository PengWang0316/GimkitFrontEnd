import React from 'react';
import renderer from 'react-test-renderer';

import { SuccessMessageSnackbar } from '../../app/components/SuccessMessageSnackbar';

jest.mock('@material-ui/core/Snackbar', () => 'Snackbar');
jest.mock('@material-ui/core/SnackbarContent', () => 'SnackbarContent');
jest.mock('@material-ui/core/Icon', () => 'Icon');
jest.mock('@material-ui/core/IconButton', () => 'IconButton');
jest.mock('@material-ui/icons/Close', () => 'CloseIcon');


describe('SuccessMessageSnackbar', () => {
  test('snapshot', () => expect(renderer.create(<SuccessMessageSnackbar {...{ isOpen: true, handleClose: jest.fn(), message: 'message' }} />).toJSON()).toMatchSnapshot());
});
