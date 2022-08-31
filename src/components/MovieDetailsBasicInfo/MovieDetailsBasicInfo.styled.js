import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  max-width: 320px;
`;

export const BasicInfoAboutMovie = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
`;
