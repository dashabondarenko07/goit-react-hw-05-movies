import { Link, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';

export default function MovieDetailsAdditionInfo() {
  const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

  return (
    <Box marginTop={[3]}>
      <h2>Addition information</h2>
      <ul>
        {navItems.map(({ href, text }) => (
          <li key={href}>
            <Link to={href}>{text}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </Box>
  );
}
