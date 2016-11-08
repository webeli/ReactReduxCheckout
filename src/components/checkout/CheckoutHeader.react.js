import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">
                            Checkout
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;