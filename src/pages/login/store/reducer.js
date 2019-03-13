/**
 * Created by GeShuai on 2019/3/13.
 */
/**
 * Created by GeShuai on 2019/3/12.
 */
/**
 * Created by GeShuai on 2019/3/11.
 */
import { fromJS } from 'immutable';
import  * as constants from './constants';

const defaultState = fromJS({
  login: false,
});



export default (state = defaultState,action) => {
  switch (action.type){
    case constants.CHANGE_LOGIN:
      return state.set('login',action.value);
    case constants.LOGOUT:
      return state.set('login',action.value);
    default :
      return state;
  }

}