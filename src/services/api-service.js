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

function createCloset(input) {
    return fetch(`${BASE_URL}/closets`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(input)
    }).then(res => res.json());
}

function deleteWishlist(id) {
    return fetch(`${BASE_URL}/wishlists/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

// function updateWishlist({ category, description, name, picture, price }, wishlistId) {
//     return fetch(`${BASE_URL}/wishlists/${wishlistId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ category, description, name, picture, price })
//     }).then(res => res.json());
// }

export {
    fetchClothes,
    fetchWishlists,
    createWishlist,
    deleteWishlist,
    // updateWishlist,
    createCloset
}