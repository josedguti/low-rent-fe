const BASE_URL = 'http://localhost:3000/clothes';

function fetchClothes() {
    return fetch(BASE_URL).then(res => res.json());
}

export {
    fetchClothes,
}