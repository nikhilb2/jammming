import TrackList from './TrackList'
class SearchResults extends React.Component {
  render() {
    return (<div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults}/>
</div>)
  }
}
