import React from 'react';
import {
  Snackbar, SnackbarContent, Icon, IconButton,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
}

export const SuccessMessageSnackbar = ({ isOpen, handleClose, message }: Props) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={isOpen}
    autoHideDuration={3000}
    onClose={handleClose}
  >
    <SnackbarContent
      message={(
        <span>
          <Icon />
          {message}
        </span>
      )}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  </Snackbar>
);

export default SuccessMessageSnackbar;
