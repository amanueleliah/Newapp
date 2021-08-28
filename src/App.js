import logo from './logo.svg';
import './App.css';
import MovieCard from './components/movieCards/MovieCard';
import './components/movieCards/MovieCard.css'
import MovieDetails from './components/movieDtailes/MovieDetails'

const imageLink = "https://i.ebayimg.com/images/g/l~0AAOSwY4pdUc36/s-l300.jpg";

function App() {
  return (
    <div className="App">
      <MovieCard type="movie" title="Rambo" posterUrl={imageLink} />
      <MovieDetails
        posterUrl="https://movies-b26f.kxcdn.com/wp-content/uploads/2021/02/Coming-2-America-Poster-Movie-Art-770x470.jpg"
        title="Coming 2 America"
        rated="PG-13"
        runtime={183}
        genre="Set in the lush and royal country of Zamunda, newly-crowned King Akeem (Eddie Murphy) and his trusted confidante Semmi (Arsenio Hall) embark on an all-new hilarious adventure that has them traversing the globe from their great African nation to the borough of Queens, New York - where it all began."
        actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg"
        rating={6.4}
      />
    </div>
  );
}

export default App;
