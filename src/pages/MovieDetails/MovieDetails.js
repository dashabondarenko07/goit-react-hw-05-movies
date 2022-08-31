import { BackLink } from 'pages/MovieDetails/MovieDetails.styled';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/api';
import MovieDetailsBasicInfo from 'components/MovieDetailsBasicInfo/MovieDetailsBasicInfo';
import MovieDetailsAdditionInfo from 'components/MovieDetailsAdditionInfo/MovieDetailsAdditionInfo';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    async function getMovieInformation() {
      try {
        setError(null);
        const getMovie = await getMovieById(movieId);
        setMovie(getMovie);

        if (getMovie.length === 0) {
          setError('No results found');
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }

    getMovieInformation();
  }, [movieId]);

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>

        {movie && (
          <>
            <MovieDetailsBasicInfo movie={movie} />
            <MovieDetailsAdditionInfo />
          </>
        )}

        {console.log(location)}
        {error}
      </div>
    </>
  );
}
