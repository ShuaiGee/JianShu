/**
 * Created by GeShuai on 2019/3/12.
 */
/**
 * Created by GeShuai on 2019/3/11.
 */
import { fromJS } from 'immutable';
import  * as constants from './constants';

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  authorList:[],
  showScroll: false,
})




export default (state = defaultState,action) => {
  switch (action.type){
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        authorList:fromJS(action.authorList)
      });
    case constants.ADD_HOME_LIST:
      return state.set('articleList',state.get('articleList').concat(action.list));
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    default :
      return state;
  }

}