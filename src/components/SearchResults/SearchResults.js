import React from 'react'
import TrackList from './components/TrackList/TrackList.js'
class SearchResults extends React.Component {
  render() {
    return (<div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults}/>
</div>)
  }
}
export default SearchResults
