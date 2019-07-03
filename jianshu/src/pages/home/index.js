import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://cdn2.jianshu.io/assets/ads/java-62d16127d94c8ca4c8a40ada899c97f4.png" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>

                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
    }

}

const mapDispatch = dispatch => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    }
})

export default connect(null, mapDispatch)(Home);