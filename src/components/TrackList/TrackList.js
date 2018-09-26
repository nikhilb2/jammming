import React from 'react'
import Track from './Track'
class TrackList extends React.Component {
  render() {
    return (<div className="TrackList">
    {this.props.tracks.map(track=>{
      return <Track track={track} />
    })}
    <!-- You will add a map method that renders a set of Track components  -->
</div>)
  }
}
export default TrackList
