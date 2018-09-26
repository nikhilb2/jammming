import React from 'react'
import Playlist from './components/Playlist/Playlist.js'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={searchResults:{
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
}}
  }
    render() {
    return (<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
  <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
    </div>
  </div>
</div>)
  }
}
export default App
