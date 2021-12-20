import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <nav className='NavBar'>
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
                <Link to='/campaigns'>
                    <h1>Campaigns</h1>
                </Link>
                <Link to='/characters'>
                    <h1>Characters</h1>
                </Link>
            </nav>
        </header>
    )
}

export default Header;