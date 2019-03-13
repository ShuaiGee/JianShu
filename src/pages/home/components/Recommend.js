/**
 * Created by GeShuai on 2019/3/12.
 */
import React,{ PureComponent } from 'react';
import { RecommendWrapper,RecommendItem,QRcodeWrapper,QRcode
} from '../style';
import { connect }  from 'react-redux';

class Recommend extends PureComponent {
  render(){
    const { list} = this.props;
    return (
      <div>
        <RecommendWrapper>
          {
            list.map((item) => {
              return <RecommendItem imgUrl={item.get('imgUrl')}
                                    key={item.get('id')} />
            })
          }
          <QRcodeWrapper>
            <QRcode/>
            <div className="QR-title">下载简书手机App 》》</div>
            <div className="QR-para">随时随地发现和创作内容</div>
          </QRcodeWrapper>
        </RecommendWrapper>


      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home','recommendList']),
  authorList: state.getIn(['home','authorList'])
})
export default connect(mapStateToProps,null)(Recommend);
