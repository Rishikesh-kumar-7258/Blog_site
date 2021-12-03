import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top">
                <div class="container-fluid">
                    <h1 class="navbar-brand mb-0">Blogger Prince</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item mb-0">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="#">Action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-success me-2" type="button"><span>Login</span> / <span>Signup</span></button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Home;