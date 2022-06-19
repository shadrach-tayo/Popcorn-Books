import { PropsWithChildren } from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';

const getRouterClassName = (isActive: boolean) =>
  `block w-full py-2 px-4 my-1 rounded-sm border-l-8 border-transparent hover:text-cornflower hover:bg-sand ${isActive
    ? "border-0 border-l-8 border-cornflower font-semibold text-md bg-sand"
    : ""
  } `;

function NavLink(props: PropsWithChildren & { to: string }) {
  const match = useMatch(props.to);
  return <RouterLink className={getRouterClassName(!!match)} {...props} />
}

export default function Nav() {
  return <nav className='static top-auto rounded-none sm:sticky sm:top-4 py-5 px-4 border-2 border-mecury sm:rounded-md'>
    <ul className='list-style-none p-0'>
      <li>
        <NavLink to="/list">Reading List</NavLink>
      </li>
      <li>
        <NavLink to="/discover">Discover</NavLink>
      </li>
    </ul>
  </nav>
}