import React from 'react'
import Playlist from './components/Playlist/Playlist.js'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchResults:{
      name:'',
      artist:'',
      album:'',
      id:''
    },
    playlistName:'',
    playlistTracks:{
      name:'Random Name',
      artist:'Random artist',
      album:'Randm Album',
      id:'Random iD'
    }
  }
  this.addTrack=this.addTrack.bind(this);
  this.removeTrack=this.removeTrack.bind(this);
  this.updatePlaylistName=this.updatePlaylistName.bind(this);
  this.savePlaylist=this.savePlaylist.bind(this);
  this.search=this.search.bind(this)
}
  savePlaylist() {
let trackURIs = this.state.playlistTracks.map(track => track.uri);
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}else{
  let tracks = this.state.playlistTracks;
  tracks.push(track);
  this.setState({playlistTracks:tracks})
}
}
updatePlaylistName(name) {
  this.setState({playlistName:name})
}
removeTrack(track) {
let tracks=this.state.playlistTracks;
tracks=tracks.filter(currentTrack=>currentTrack.id !==track.id);
this.setState({playlistTracks:tracks})
}
search(term) {
  console.log(term)
}

    render() {
    return (<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
  <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults
      searchResults={this.state.searchResults}
      onAdd={this.addTrack}
      />
      <Playlist
      playlistName={this.state.playlistName}
      playlistTracks={this.state.playlistTracks}
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}
      onSave={this.savePlaylist}
      />
    </div>
  </div>
</div>)
  }
}
export default App
