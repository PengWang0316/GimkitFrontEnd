import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import posts from './Posts/reducers';
import postCount from './PostCount/reducers';

export default combineReducers({
  postCount,
  posts,
});
