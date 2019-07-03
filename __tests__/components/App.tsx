import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../../app/components/App';

jest.mock('@material-ui/core/styles/MuiThemeProvider', () => 'MuiThemeProvider');
jest.mock('@material-ui/core/styles/createMuiTheme', () => jest.fn().mockReturnValue('Theme'));
jest.mock('react-router-dom', () => ({
  BrowserRouter: () => 'Router', Route: () => 'Route', Switch: () => 'Switch',
}));
jest.mock('../../app/components/Navbar', () => 'Navbar');

describe('App', () => {
  test('snapshot', () => expect(renderer.create(<App />).toJSON()).toMatchSnapshot());
});
