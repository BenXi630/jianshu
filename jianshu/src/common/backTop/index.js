import React, { PureComponent } from 'react';
import { BackTopWrapper } from './style';

class BackTop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            backTopShow: false
        }

        this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    }

    render() {
        return (
            <div>
                { this.state.backTopShow ? 
                    <BackTopWrapper onClick={() => document.scrollingElement.scrollTop = 0}>
                        顶部
                    </BackTopWrapper> :
                    null
                }
            </div>
        );
    }

    componentDidMount() {
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.changeScrollTopShow)
    }

    changeScrollTopShow(){
        if(document.documentElement.scrollTop < 100){
            this.setState({
                backTopShow: false
            })
        }else{
            this.setState({
                backTopShow: true
            })
        }
    }
}

export default BackTop;