/*
export function someMutation (state) {
}
*/

export function SET_PET_TYPES(state) {
    let x = ['Dog', 'Cat'];
    state.petTypes = x;
}

export function SET_DOG_BREEDS(state, payload) {
    state.dogBreeds = payload;
}

export function SET_BREED_DETAILS(state, payload) {
    state.breedDetails = payload;
}

export function SET_DOG_TYPES(state, payload) {
    state.dogTypes = payload;
}

export function SET_DOG_FAMILIES(state, payload) {
    state.dogFamilies = payload;
}