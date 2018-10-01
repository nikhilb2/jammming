let token;
let expiry;
const clientID='1ff455d4ee9842c0bed1a658bb501acf'
const redirectURI = 'http://jammmed.surge.sh'
export const Spotify = {
  getAccessToken() {
    if (token) {
      return token
    }else{
      let accessToken =window.location.href.match(/access_token=([^&]*)/);
      let tokenExpiry = window.location.href.match(/expires_in=([^&]*)/);
      if (accessToken && tokenExpiry) {
   accessToken = token[1];
   tokenExpiry = expiry[1];
   window.setTimeout(() => accessToken = '', tokenExpiry * 1000);
   window.history.pushState(`Access Token`, null, '/');
   return token;
    }else {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
      }
    }
  },
  async search(term) {
    const accessToken=this.getAccessToken()
      try {
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {headers:{Authorization:`Bearer ${accessToken}`}});
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse)
          if (jsonResponse.tracks) {
            return jsonResponse.tracks.items.map(track=> ({
            id:track.id,
            name:track.name,
            artist:track.artist[0].name,
            uri:track.uri
          }))
        }else {
          return []
        }
      }
       else {
        throw new Error (`Something went wrong, please try again.`)
      }
      }catch (error) {
  console.log(error)
      }
  },
  async savePlaylist(playlistName, trackURIs) {
    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};
    let userID;
    try {
      if (playlistName && trackURIs) {
        const response = await fetch(`https://api.spotify.com/v1/me`, {
          headers:headers})
            if (response.ok) {
            const jsonResponse = await response.json();
            userID=jsonResponse.id;
            if (userID) {
              const playlist = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({ name: playlistName })
            });
            if (playlist.ok) {
              const jsonPlaylist = await playlist.json();
              const playlistID = jsonPlaylist.id;
              if (playlistID) {
                await fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                  headers: headers,
                  method: 'POST',
                  body: JSON.stringify({ uris: trackURIs }),
              })
            }
          }
        }
      }
    }else {
      return
    }}catch(error) {
  return
}
}
}
