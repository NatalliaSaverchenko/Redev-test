import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/temperature-components'}>Temperature</NavLink>
        </li>
      </ul>
    </>
  )
}
export default Nav
