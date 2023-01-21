import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bg-dark" data-bs-theme="dark">
                        <div><a href={"https://javaguides.net"} className={"navbar-brand"}>Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;