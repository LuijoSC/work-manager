import React from 'react';

const Header = () => {
    return(
        <header className="app-header">
        <p className="user-name">Welcome <span>Luis Joel</span> </p>
        <nav className="nav-main">
            <a href="#!">Logout</a>
        </nav>
        </header>
    );
}

export default Header;