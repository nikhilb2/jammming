import React from 'react'
class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.renderAction=this.renderAction.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track)
  }
  removeTrack() {
    this.props.onRemove(this.props.track)
  }
  renderAction() {
    if (this.prop.isRemoval) {
      return <a className='Track-action' onClick={this.removeTrack}>-</a>;
    }else {
      return <a className='Track-action' onClick={this.addTrack}>-</a>;
    }
  }
  render() {
    return (<div class="Track">
  <div className="Track-information">
    <h3>{this.props.track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album}</p>
  </div>
  {this.renderAction}
</div>)
  }
}
export default Track
