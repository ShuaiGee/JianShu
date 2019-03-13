/**
 * Created by GeShuai on 2019/3/11.
 */
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight ,
  BackTop

} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommender from './components/Recommend';

import { actionCreators } from './store';



class Home extends PureComponent {
  handleScrollTop (){
    window.scrollTo(0,0);
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img  alt="#" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommender/>
          <Writer/>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> :null
        }
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow);

  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }
}
const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll']),

})
const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow () {
    if(document.documentElement.scrollTop > 100)
    {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);