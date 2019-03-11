/**
 * Created by GeShuai on 2019/3/11.
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
export default combineReducers({
    header: headerReducer
});