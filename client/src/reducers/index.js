import { combineReducers } from 'redux';

import tokenReducer  from './reducer_token';



const rootReducer = combineReducers({
	token : tokenReducer
});

export default rootReducer;