import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img{
        width: 100%;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    overflow: hidden;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic{
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
`

export const WriterWrapper = styled.div`
    width: 278px;
`

export const LoadMore = styled.div`
    width: 100%;
    height:40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px auto 60px;
    cursor: pointer;
`

export const WriterListTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchListSwitch = styled.div`
    float: right;
    cursor: pointer;
    user-select: none;
    .spin{
        display: inline-block;
        margin-right: 3px;
        font-size: 12px;
        transition: all .2s ease-in;
    }
`

export const WriterList = styled.div`
    margin: 15px auto;
    overflow: hidden;
    position: relative;
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ddd;
        float: left;
        margin-right: 12px;
    }
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        line-height: 18px;
        p{
            margin-top: 2px;
            font-size: 12px;
            color: #969696;
        }
    }
    .follow{
        position: absolute;
        right: 0;
        top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`

export const WriterMore = styled.div`
    margin-top: 10px;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    line-height: 20px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
`