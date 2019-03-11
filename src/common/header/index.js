/**
 * Created by GeShuai on 2019/3/10.
 */
import React,{ Component } from 'react';
import { connect } from 'react-redux';
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


class Header extends Component {
    getListArea(){
        const { focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
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
        const { focused,list,handleInputFocus,handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
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
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                </Nav>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe670;</span> 写文章</Button>
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


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);