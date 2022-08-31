import { Outlet } from 'react-router-dom';
import { StyledLink } from './AppBar.styled';
import { Box } from '../Box';
import { Suspense } from 'react';

export default function AppBar() {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
  ];

  return (
    <>
      <Box
        as="header"
        p={4}
        background="#f6f6f6"
        boxShadow="0 4px 16px 0.4px rgba(16, 0, 0, 0.2)"
      >
        <Box as="nav">
          {navItems.map(({ href, text }) => (
            <StyledLink key={href} to={href}>
              {text}
            </StyledLink>
          ))}
        </Box>
      </Box>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
