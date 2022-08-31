import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './MoviesForm.styled';

export default function MoviesForm({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    onSubmit(search);

    setSearch('');
  };
  const handlerChange = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <input
          onChange={handlerChange}
          name={search}
          value={search}
          type="text"
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
}
MoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
