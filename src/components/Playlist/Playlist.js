import React from 'react'
import TrackList from '../TrackList/TrackList'
class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange=this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.prop.onNameChange(event.target.value)
  }
  render() {
    return (<div className="Playlist">
  <input defaultValue="New Playlist" onChange={this.handleNameChange}/>
  <TrackList tracks={this.props.playlistTracks} onRemove={this.prop.onRemove}/>
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>)
  }
}
export default Playlist
