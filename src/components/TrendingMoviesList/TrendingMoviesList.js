import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/api';

export default function ListTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setError(null);
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);

        if (!trendingMovies.length) {
          setError('No results found');
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }

    getMovies();
  }, []);

  return (
    <>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}

      {error}
    </>
  );
}
