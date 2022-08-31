import PropTypes from 'prop-types';
import {
  BasicInfoAboutMovie,
  Container,
  Image,
} from './MovieDetailsBasicInfo.styled';

export default function MovieDetailsBasicInfo({ movie }) {
  const { title, poster_path, overview, release_date, vote_average, genres } =
    movie;

  return (
    <Container>
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : 'http://via.placeholder.com/500x750'
        }
        alt={title}
      />
      <BasicInfoAboutMovie>
        <h1>{`${title} (${release_date.substring(0, 4)})`}</h1>
        <p>User Score: {Math.trunc(vote_average * 10)}%</p>

        <h2>Overview</h2>
        <p>{overview}</p>

        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </BasicInfoAboutMovie>
    </Container>
  );
}
MovieDetailsBasicInfo.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.number,
  vote_average: PropTypes.number,
  genres: PropTypes.objectOf(PropTypes.string.isRequired),
};
