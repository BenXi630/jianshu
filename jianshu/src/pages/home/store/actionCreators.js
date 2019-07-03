import * as constants from './constants';
import axios from 'axios';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList
})

const addArticleList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list,
    nextPage
})

export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getMoreList = (page) => {
    return dispatch => {
        axios.get('/api/homeList.json?page='+page).then(res => {
            const result = res.data.data;
            dispatch(addArticleList(result, page + 1));
        }).catch(err => {
            console.log(err);
        })
    }
}