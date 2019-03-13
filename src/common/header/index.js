/**
 * Created by GeShuai on 2019/3/10.
 */
import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'


class Header extends PureComponent {
  getListArea(){
    const { focused,list,page,totalPage,
      mouseIn,handleMouseEnter,
      handleMouseLeave,handleChangePage,logout } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length) {
      for (let i = (page - 1) * 10; i < page * 10;i++){
        if(newList[i])
        {
          pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }

      }
    }

    if(focused||mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
            ><span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  render(){
    const { focused,list,handleInputFocus,handleInputBlur,logout,login} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'><Logo/></Link>
        <Nav>
          <Link to="/">
             <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          {
            login ?
              <NavItem onClick={logout} className="right">退出</NavItem> :
              <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
          }

          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused':''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe62b;</span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting"><span className="iconfont">&#xe670;</span> 写文章</Button>
          </Link>
            <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused:state.get('header').get('focused'),
    list:state.get('header').get('list'),
    page:state.get('header').get('page'),
    totalPage:state.get('header').get('totalPage'),
    mouseIn:state.get('header').get('mouseIn'),
    login:state.get('login').get('login'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      (list.size === 0)&&dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle) {
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle)+360+'deg)';
      if(page < totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    },
    logout(){
      dispatch(loginActionCreators.logout());
    }


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);