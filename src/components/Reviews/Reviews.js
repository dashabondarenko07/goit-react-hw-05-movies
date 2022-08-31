import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovieById } from 'services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getReviews() {
      try {
        setError(null);
        const getReviews = await getReviewsMovieById(movieId);
        setReviews(getReviews);

        if (getReviews.length === 0) {
          setError("We don't have any reviews for this movie.");
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {error}
    </>
  );
}
