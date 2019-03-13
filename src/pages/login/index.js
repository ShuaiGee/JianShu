/**
 * Created by GeShuai on 2019/3/13.
 */
/**
 * Created by GeShuai on 2019/3/11.
 */
/**
 * Created by GeShuai on 2019/3/11.
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter,Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { LoginWrapper,LoginBox,Input,Button } from './style';
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={(input)=>(this.account = input)}/>
            <Input placeholder="密码" type='password' innerRef={(input)=>(this.password = input)}/>
            <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to="/" />
    }

  }
}
const mapStateToProps = (state) => ({
  loginStatus:state.getIn(['login','login'])
});


const mapDispatchToProps = (dispatch) => ({
  login(accountElem,passwordElem){
    dispatch(actionCreators.login(accountElem,passwordElem));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
