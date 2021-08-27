import logo from './logo.svg';
import './App.css';
import MovieCard from './components/movieCards/MovieCard';
import './components/movieCards/MovieCard.css'

const imageLink = 'https://www.cnet.com/a/img/0deVuJOvD1MP9zaiV2ewHNmiyos=/1200x630/2020/07/30/f28dc5b7-0ed4-4e3e-be2f-704f3b7066a8/batman-animated-movie.png'

function App() {
  return (
    <div className="App">
      <MovieCard type= 'movie' title ='Batman' posterUrl ={imageLink} />
    </div>
  );
}

export default App;
