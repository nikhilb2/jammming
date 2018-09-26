import React from 'react'
class Track extends React.Component {
  renderAction() {

  }
  render() {
    return (<div class="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  <a className="Track-action">+-</a>
</div>)
  }
}
export default Track
