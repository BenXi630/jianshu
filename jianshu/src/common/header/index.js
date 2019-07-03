import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchItem,
    Addition,
    Button
} from './style';

class Header extends PureComponent {

    getListArea() {
        const { focused, mouseIn, list, page, totalPage, handleonMouseEnter, handleonMouseLeave, handleChangePage } = this.props;
        let pageList = [];

        if(list.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                if(list[i]) {
                    pageList.push(
                        <SearchItem key={list[i]}>{list[i]}</SearchItem>
                    )
                }
            }
        }

        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleonMouseEnter} onMouseLeave={handleonMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={icon => {this.spinIcon = icon}} className="iconfont spin">&#xe689;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            );
        }else {
            return null;
        }
    }

    render() {
        const { focused, list, login, handleInputFocus, handleInputBlur, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem className="right" onClick={logout}>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className="iconfont zoom">&#xe637;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe613;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

}


const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus(list) {
            (list.size === 0 ) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
    
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleonMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleonMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;

            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },

        logout() {
            dispatch(loginActionCreators.logout());
            localStorage.removeItem('login')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);