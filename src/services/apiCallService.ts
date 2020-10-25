export default function getRequest(url: string, key: string): unknown {
    const headers = new Headers()
    headers.append('Authorization', 'Basic ' + key)

    return fetch(url, {
        headers: headers,
    })
        .then(function (response) {
            if (response.ok) {
                return response.json().then(function (json) {
                    return json
                })
            } else {
                console.log('Looks like there was a problem. Status Code: ' + response.status)
                return
            }
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err)
        })
}
