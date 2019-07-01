import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import posts from './Posts/reducers';

export default combineReducers({
  posts,
});
