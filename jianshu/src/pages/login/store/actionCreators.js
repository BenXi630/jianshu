import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

export const login = (accout, password) => {
    return dispatch => {
        axios.get('/api/login.json?account=' + accout + '&passwrod=' + password).then(res => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
                localStorage.setItem('login', true)
            }else {
                alert('登陆失败');
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})