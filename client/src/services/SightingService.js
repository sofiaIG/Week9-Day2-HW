const baseURL = 'http://localhost:5000/api/sightings/'

const SightingService ={

getSightings () {
    return fetch(baseURL)
        .then(res => res.json())
},

postSighting (payload) {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
},


deleteSighting (id) {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
}


export default SightingService;
