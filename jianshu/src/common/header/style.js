import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom{
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        right: 5px;
        bottom: 5px;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    /* transition: width .2s ease-in; */
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
        + .iconfont{
            background: #777;
            color: #fff;
        }
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    user-select: none;
    .spin{
        display: inline-block;
        margin-right: 3px;
        font-size: 12px;
        transition: all .2s ease-in;
    }
`

export const SearchItem = styled.a`
    display: block;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`