import React from 'react'
import TrackList from '.components/TrackList/TrackList'
export class Playlist extends React.Component {
  render() {
    return (<div className="Playlist">
  <input defaultValue="New Playlist"/>
  <a class="Playlist-save">SAVE TO SPOTIFY</a>
</div>)
  }
}
