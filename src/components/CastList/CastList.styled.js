import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${p => p.theme.space[4]}px;
  margin: 0;
  padding: 0 ${p => p.theme.space[5]}px;
  list-style: none;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
`;
