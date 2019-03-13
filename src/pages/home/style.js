/**
 * Created by GeShuai on 2019/3/12.
 */
import styled from 'styled-components';
export const  HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const  HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        }
`;
export const  HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const  TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    font-size: 14px;
    border-radius: 4px;
    .topic-pic {
        float: left;
        width: 32px;
        height:32px;
        margin-right: 10px;
        }
`;
export const  ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
        margin-right: 5px;
        }
`;
export const  ListInfo = styled.div`
    width: 500px;
    
    .title {
        font-size: 18px;
        line-height:27px;
        font-weight: bold;
        color: #333;
        }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
        }    
`;
export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
    cursor: pointer;
`;
export const QRcodeWrapper = styled.div`
    margin-top:20px;
    width: 278px;
    height: 80px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    .QR-title {
        font-size: 15px;
        color:#333;
        margin-top: 20px;
    }
    .QR-para {
        margin-top: 10px;
        font-size: 13px;
        color: #999;
    }
`;
export const QRcode = styled.div`
    cursor: pointer;
    height: 60px;
    width:60px;
    float:left;
    margin: 10px 25px;
    background:url(https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png);
    background-size: contain;
    
`;
export const WriterWrapper = styled.div`
	width: 278px;
	border-radius: 3px;
	height: 300px;
	text-align: center;
	.rem {
	    height:20px;
	    line-height:20px;
	    color: #333;
	    text-align: left;
	    font-size: 13px;
	    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        }
`;
export const AuthorItem = styled.div`
    width: 280px;
    height: 60px;
    cursor: pointer;
    margin-top: 2px;
    .author-pic {
        width: 46px;
        height: 46px;
        border-radius:23px;
        float:left;
        background: url(${(props) => props.imgUrl});
	    background-size: contain;
	    }
	.author-info {
	    width: 160px;
	    height: 50px;
	    margin-left: 10px;
	    float:left;
	    text-align:left;
	    }
	    .author-name {
	        padding-top: 5px;
            font-size: 14px;
            display: block;
            color:#333;
	    }
	    .num {
	        padding-top: 5px;
	        font-size: 13px;
	        color: #999;
	    }
	    .tip {
	        color:green;
	        font-size: 15px;
	        float:right;
	        width:60px;
	        margin-top:10px;
	        }
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #f7f7f7;
	text-align:center;
	border-radius: 10px;
	color: #999;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`