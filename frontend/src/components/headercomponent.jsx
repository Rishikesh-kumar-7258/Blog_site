import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Headtop />
                <Navbar />
            </>
        )
    }
}

const Headtop = () => {
    return (
        <div className="container-fluid p-3 bg-dark text-white">
            <div className="row">
                <span className="col-12 text-center fs-1 fw-bold">Blogger Prince</span>
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row" id="navbarSupportedContent">
                    <ul class="navbar-nav  mb-2 mb-lg-0 text-white col-8">
                        <li class="nav-item btn-group d-flex">
                            <button className="btn btn-primary fw-bolder py-3 px-5" style={{flex:1}}>Option 1</button>
                            <button className="btn btn-primary fw-bolder py-3 px-5" style={{flex:1}}>Option 2</button>
                            <button className="btn btn-primary fw-bolder py-3 px-5" style={{flex:1}}>Option 3</button>
                            <button className="btn btn-primary fw-bolder py-3 px-5" style={{flex:1}}>Option 4</button>
                        </li>
                    </ul>
                    <form class="d-flex col-4">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class ="btn btn-success" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;