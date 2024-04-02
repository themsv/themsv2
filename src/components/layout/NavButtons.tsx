import { NavLink } from 'react-router-dom';

import classes from './NavButton.module.css';

function NavButtons() {
  return (
    <>
      {availableNavLinks.map((link) => (
        <CustomNavButton label={link.label} path={link.path} key={link.path} />
      ))}
    </>
  );
}

export default NavButtons;

interface CustomNavButtonProps {
  label: string;
  path: string;
}

function CustomNavButton(props: CustomNavButtonProps) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) =>
        isActive ? `${classes.navLink} ${classes.activeNavLink}` : classes.navLink
      }>
      {props.label}
    </NavLink>
  );
}

const availableNavLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Blogs',
    path: 'blogs'
  },
  {
    label: 'About',
    path: 'about'
  }
];
