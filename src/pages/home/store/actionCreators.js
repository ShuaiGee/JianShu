/**
 * Created by GeShuai on 2019/3/12.
 */
import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';
const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  authorList: result.authorList,
});
const addHomeList = (list) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
});
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(changeHomeData(res.data.data));

    });
  }
};
export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result));

    });
  }
};
export const toggleTopShow = (show) => ({
  type:constants.TOGGLE_SCROLL_TOP,
  show
})