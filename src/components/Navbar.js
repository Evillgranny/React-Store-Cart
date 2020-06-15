import React from 'react'
import PropTypes from "prop-types";

const Navbar = ( {totalCounters} ) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Navbar
                <span className="badge badge-pill badge-secondary ml-2">{totalCounters}</span>
            </a>
        </nav>
    )
}

Navbar.propTypes = {
    totalCounters: PropTypes.number.isRequired,
}

export default Navbar
