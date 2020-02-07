import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Strona główna</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">O mnie</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Blog</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Współpraca</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Kontakt</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Zamknij</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
