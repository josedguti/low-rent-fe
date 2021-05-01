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
    return fetch(`${BASE_URL}/wishlists/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

function fetchClosets() {
    return fetch(`${BASE_URL}/closets`).then(res => res.json());
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

function deleteCloset(id) {
    return fetch(`${BASE_URL}/closets/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

function updateCloset({ size, qty, id }) {
    return fetch(`${BASE_URL}/closets/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ size, qty })
    }).then(res => res.json());
}

export {
    fetchClothes,
    fetchWishlists,
    createWishlist,
    deleteWishlist,
    fetchClosets,
    createCloset,
    deleteCloset,
    updateCloset
}