const clientId = 'f89a9dd60df643578dd11f9862c320b2';
const redirectUrl = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    //Con este metodo, vamos a obtener el token necesario para hacer requests a la API
    getToken() {
        if(accessToken) {
            return accessToken;
        };
        //Con las lineas a continuacion, vamos a obtener un array con 2 elementos, el primer elemento contendra todo el criterio a buscar, el segundo, solamente regresara el critiero que se encaspsula entre paentesis. La expresión regular [^&]* busca una subcadena que contenga cero o más caracteres que no sean &. Los corchetes definen un conjunto de caracteres y el acento circunflejo (^) al principio del conjunto indica que se deben buscar caracteres que no estén en el conjunto. En este caso, el conjunto solo contiene el carácter &, por lo que la expresión busca caracteres que no sean &. El asterisco después del conjunto indica que se buscaran N cantidades de caracteres del conjunto. Esto significa que la expresión buscará una subcadena que contenga cero o más caracteres, deteniendose en el primer &, de omitirse el asterisco, solo regresaria el primer caracter que coincida con el criterio
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1]);
            //Vamos a programar un setTimeout en el objeto global window para poder refrescar el token cada vez que Spotify lo determine por expiresIn
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            //Vamos a agregar una nueva entrada al historial de navegacion para que se rediriga a la pagina raiz si el usuario decide regresar con el boton back del navegador
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            //Si no contamos con el token, vamos a redireccionar al usuario a un login screen para obtenerlo
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
            window.location = accessURL;
        }
    },
    //Este metodo nos permitira emitir bursquedas a la API de spotify
    search(term) {
        //Primero tenemos que obtener el token para poder utilizar la API
        const accessToken = Spotify.getToken();
        //ya con el token, podemos hacer la busqueda
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            }
            //Como recordatorio, el metodo map va a regresar un nuevo array con las condiciones especificadas por el metodo map 
            return jsonResponse.tracks.items.map(song => ({
                id: song.id,
                name: song.name,
                artist: song.artists[0].name,
                album: song.album.name,
                uri: song.uri
            }));
        });
    },

    savePlaylist(playlist, playlistName) {

        if(!playlistName || !playlist ) {
            return alert('Please enter a name or add a song to save a new playlist') 
        };

        const accessToken = Spotify.getToken();
        let userId;
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };

        return fetch('https://api.spotify.com/v1/me', {
            headers: headers,
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                    name: playlistName,
                    public: false
                }).then(response => {
                    return response.json()
                }).then(jsonResponse => {
                    const playListId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/playlists/${playListId}/tracks`, {
                        method: 'post',
                        headers: headers,
                        body: JSON.stringify({uris: playlist})
                        })
                    })
                })
            })
    }       


};

export default Spotify;