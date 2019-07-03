import React from 'react';
import renderer from 'react-test-renderer';

import { Navbar } from '../../app/components/Navbar';

jest.mock('@material-ui/core/Toolbar', () => 'Toolbar');
jest.mock('@material-ui/core/AppBar', () => 'AppBar');
jest.mock('@material-ui/core/Typography', () => 'Typography');
jest.mock('react-router-dom', () => ({
  Link: () => 'Link', withRouter: () => jest.fn(),
}));
jest.mock('@kevinwang0316/i18n', () => ({ get: jest.fn().mockReturnValue('I18n text') }));

describe('Navbar', () => {
  test('snapshot', () => expect(renderer.create(<Navbar />).toJSON()).toMatchSnapshot());
});
