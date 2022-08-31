import MoviesForm from 'components/MoviesForm/MoviesForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/api';

export default function Movies() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  useEffect(() => {
    async function searchMovies() {
      try {
        setError(false);
        const searchQuery = searchParams.get('query');
        if (searchQuery === '') {
          return;
        }

        const getMovies = await getSearchMovies(searchQuery);
        setMovies(getMovies);
        if (getMovies.length === 0) {
          return setError(`No results found for "${searchQuery}".`);
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }

    searchMovies();
  }, [query, searchParams]);

  const handlerSubmit = newQuery => {
    setSearchParams({ query: newQuery });
    setQuery(newQuery);
  };

  return (
    <>
      <MoviesForm onSubmit={handlerSubmit} />

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {error}
    </>
  );
}
