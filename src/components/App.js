import HomePage from './HomePage';
import APImovies from '../services/movies-api';

function App() {
  APImovies();

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
