/**
 * Created by Rubel on 28/01/18.
 */
import { combineReducers } from 'redux';

import tokenReducer  from './reducer_token';

const rootReducer = combineReducers({
	token : tokenReducer
});

export default rootReducer;