import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><NavLink className="active" to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>

    )
}
export default Header