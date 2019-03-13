/**
 * Created by GeShuai on 2019/3/12.
 */
import React,{ PureComponent } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
class List extends PureComponent {
  render(){
    const { list,getMoreList } = this.props;
    return (
      <div>
        {
          list.map((item,index) => {
            return (
              <Link key={index} to={'./detail/' + item.get('id')} >
                <ListItem >
                  <img className="pic" alt="#" src={item.get('imgUrl')}/>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.get('home').get('articleList')
});
const mapDispatchToProps = (dispatch) => ({
  getMoreList(){
    dispatch(actionCreators.getMoreList());
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(List);