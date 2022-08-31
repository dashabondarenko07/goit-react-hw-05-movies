import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastsMovieById } from 'services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCasts() {
      try {
        setError(null);
        const getCastsMovie = await getCastsMovieById(movieId);
        setCasts(getCastsMovie);

        if (getCastsMovie.length === 0) {
          setError("We don't have any cast for this movie.");
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }

    getCasts();
  }, [movieId]);
  return (
    <>
      {casts.length > 0 && <CastList casts={casts} />}
      {error}
    </>
  );
}
