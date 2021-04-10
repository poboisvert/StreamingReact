import { combineReducers } from 'redux';
import authReducer from './authReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  // replaceThis: () => 1,
  auth: authReducer,
  form: formReducer, // Redux store var
});
