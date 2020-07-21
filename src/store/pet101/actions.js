/*
export function someAction (context) {
}
*/
import axios from 'axios';

export function getPetTypes({commit}) {
    commit('SET_PET_TYPES');
}

export function getPetBreeds({commit}) {
    axios({
        method: 'GET',
        url: 'http://192.168.0.52:1337/api/v1/dog/lesser-info',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res)=> {
        // console.log(res);
        commit('SET_DOG_BREEDS', res.data);
    })
}

export function getBreedDetails({commit}, payload) {
    axios({
        method: 'GET',
        url: `http://192.168.0.52:1337/api/v1/dog/full-info?name=${payload}`,
        headers: {
            'Content-Type': 'application/json'
        } 
    })
    .then((res)=> {
        console.log(res);
        commit('SET_BREED_DETAILS', res.data)
    })
}

export function getDogTypes({commit}) {
    axios({
        method: 'GET',
        url: 'http://192.168.0.52:1337/api/v1/dog/types',
        headers: {
            'Content-Type': 'application/json'
        } 
    })
    .then((res)=> {
        commit('SET_DOG_TYPES', res.data);
    })
}

export function getDogFamilies({commit}) {
    axios({
        method: 'GET',
        url: 'http://192.168.0.52:1337/api/v1/dog/families',
        headers: {
            'Content-Type': 'application/json'
        } 
    })
    .then((res)=> {
        commit('SET_DOG_FAMILIES', res.data);
    })
}