let token;
let expiry;
const clientID='1ff455d4ee9842c0bed1a658bb501acf'
const redirectURI = 'http://localhost:3000/'
const Spotify = {
  getAccessToken() {
    if (token) {
      return token
    }else{
      const accessToken =window.location.href.match(/access_token=([^&]*)/);
      const tokenExpiry = window.location.href.match(/expires_in=([^&]*)/);
      if (accessToken && tokenExpiry) {
   accessToken = token[1];
   tokenExpiry = expiry[1];
   window.setTimeout(() => accessToken = '', expiresIn * 1000););
   window.history.pushState(`Access Token`, null, '/');
   return token;
    }else {
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`);
      }
  }
}
