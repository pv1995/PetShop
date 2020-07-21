/*
export function someAction (context) {
}
*/
import axios from 'axios';
import socialAuth from '../socialConfig.js';

export function register({commit, dispatch}, payload) {
    axios({
        method: 'POST',
        url: 'http://192.168.0.52:1337/api/v1/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            userInfo: payload
        }
    })
    .then((res)=> {
        localStorage.setItem('t', res.data);
        dispatch('getUserInfo');
        
    })
}

//Change data object after backend handles it
export function login({commit, dispatch}, payload) {
    console.log(payload)
    axios({
        method: 'POST',
        url: 'http://192.168.0.52:1337/api/v1/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "emailAddress": payload.emailAddress,
            "password": payload.password
        }
    })
    .then((res)=> {
        localStorage.setItem('t', res.data);
        dispatch('getUserInfo');
    })
}

export function getUserInfo({commit}) {
    axios({
        method: 'GET',
        url: 'http://192.168.0.52:1337/api/v1/me',
        headers: {
            "Authorization" : `Bearer ${localStorage.getItem('t')}`
        }
    })
    .then((res)=> {
        console.log(res);
        commit('SET_USER_INFO', res.data)
    })
}

export function social_authenticate({commit, dispatch}, payload) {
    socialAuth.authenticate(payload)
    .then((authResponse)=> {
        console.log(authResponse);
    })
}