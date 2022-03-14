import React, { Component } from 'react';
import Navbar from './navbar';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Navbar />
                <RenderCards />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8"></div>
                        <div className="col-12 col-md-4"></div>
                    </div>
                </div>
            </>
        )

    }
}

const RenderCards = props => {
    return (
        <h1>This is cards section</h1>
    )
}

export default Home;