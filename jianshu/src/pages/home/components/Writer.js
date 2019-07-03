import React, { PureComponent } from 'react';
import { WriterWrapper, WriterListTitle, SearchListSwitch, WriterList, WriterMore } from '../style';

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterListTitle>
                    推荐作者
                    <SearchListSwitch>
                        <i className="iconfont spin">&#xe689;</i>
                        换一批
                    </SearchListSwitch>
                </WriterListTitle>
                <WriterList>
                    <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <div className="name">梅拾璎</div>
                    <div className="name">
                        <p>写了269k字 · 25k喜欢</p>
                    </div>
                    <div className="follow">+关注</div>
                </WriterList>
                <WriterList>
                    <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <div className="name">梅拾璎</div>
                    <div className="name">
                        <p>写了269k字 · 25k喜欢</p>
                    </div>
                    <div className="follow">+关注</div>
                </WriterList>
                <WriterList>
                    <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <div className="name">梅拾璎</div>
                    <div className="name">
                        <p>写了269k字 · 25k喜欢</p>
                    </div>
                    <div className="follow">+关注</div>
                </WriterList>
                <WriterList>
                    <img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <div className="name">梅拾璎</div>
                    <div className="name">
                        <p>写了269k字 · 25k喜欢</p>
                    </div>
                    <div className="follow">+关注</div>
                </WriterList>
                <WriterMore>查看全部</WriterMore>
            </WriterWrapper>
        );
    }
}

export default Writer;