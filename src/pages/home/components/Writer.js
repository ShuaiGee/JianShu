/**
 * Created by GeShuai on 2019/3/12.
 */
import React,{ PureComponent } from 'react';
import { WriterWrapper,AuthorItem,LoadMore
} from '../style';
import { connect }  from 'react-redux';
class Writer extends PureComponent {
  render(){
    const { authorList } = this.props;
    return (
      <div>
        <WriterWrapper>
          {
            authorList.map((item) => {
              return <AuthorItem imgUrl={item.get('imgUrl')}
                                 key={item.get('id')} >
                <div className="author-pic"></div>
                <div className="author-info">
                  <div className="author-name">{item.get('name')}</div>
                  <div className="num">写了{item.get('num1')}k字·{item.get('num2')}k喜欢</div>
                </div>
                <div className="tip">+关注</div>
              </AuthorItem>
            })
          }
        </WriterWrapper>
        <LoadMore>查看全部 ></LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  authorList: state.getIn(['home','authorList'])
})
export default connect(mapStateToProps,null)(Writer);
