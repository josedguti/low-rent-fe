const BASE_URL = 'http://localhost:3000';

function fetchClothes() {
    return fetch(`${BASE_URL}/clothes`).then(res => res.json());
}

function fetchWishlists() {
    return fetch(`${BASE_URL}/wishlists`).then(res => res.json());
}

function createWishlist(data) {
    return fetch(`${BASE_URL}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function deleteWishlist(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

function updateWishlist({ userId, id }) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ userId })
    }).then(res => res.json());
}

export {
    fetchClothes,
    fetchWishlists,
    createWishlist,
    deleteWishlist,
    updateWishlist
}