import PropTypes from 'prop-types';
import { Image, List } from './CastList.styled';

export default function CastList({ casts }) {
  return (
    <List>
      {casts.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : 'http://via.placeholder.com/396x595'
            }
            alt={name}
          />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </List>
  );
}
CastList.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
