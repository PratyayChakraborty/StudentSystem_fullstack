import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-dark bg-dark' ><div ><a className="navbar-brand" style={{ color: 'white', alignItems: 'center', justifyContent: 'center' }}>Student Management System</a></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;