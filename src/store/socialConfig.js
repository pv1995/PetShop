import Vue from 'vue'
var VueAxios = require('vue-axios')
import  { VueAuthenticate }  from 'vue-authenticate'
var axios = require('axios');

Vue.use(VueAxios, axios)

const socialAuth = new VueAuthenticate(Vue.prototype.$http, {
    baseUrl: 'http://192.168.0.52:1337/api/v1/',
    providers: {
        google: {
            name: 'google',
            url: '/auth/google',
            clientId: 'http://323794025389-g1865fqiqotnt8b7gahqri0nephjio9e.apps.googleusercontent.com/',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: "http://localhost:8080",
            requiredUrlParams: ['scope'],
            optionalUrlParams: ['display'],
            scope: ['profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 452, height: 633 }
        }
    }
})

export default socialAuth;