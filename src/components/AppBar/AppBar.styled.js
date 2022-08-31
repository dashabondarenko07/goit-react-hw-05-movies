import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};

  &:not(:first-child) {
    margin-left: ${p => p.theme.space[3]}px;
  }
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.text};
  }
`;
