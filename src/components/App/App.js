import Playlist from './Playlist'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state{searchResults:{
      name:'',
      artist:'',
      album:'',
      id:''

    }}
  }
  render() {
    return (<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
      <!-- Add a Playlist component -->
    </div>
  </div>
</div>)
  }
}
