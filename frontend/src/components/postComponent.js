import React, { Component } from "react";
import {
    Link
} from 'react-router-dom';

class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
        }

    }

    handleClick = (e) => {
        console.log(e.target);
    }


    render() {
        return (
            <div className="col-md-8 p-3 col-12">
                <div className="row">
                    <Renderposts posts={this.state.posts} onclick={this.handleClick} />
                </div>
            </div>
        )
    }
}

const array = [1, 2, 3, 5, 10, 50]

const Renderposts = (props) => {
    return (

        // props.posts.map((element, index) => {
        //     return (
        //         <div key={index}>
        //             <h1>{element.title}</h1>
        //             <p>{element.content}</p>
        //         </div>
        //     )
        // })
        array.map((e, i) => {
            return (
                <Link to={`/post/${e}`} key={i}>
                    <div className="card col-12 col-md-6">
                        <img src="https://source.unsplash.com/1600x900/?nature,water" className="card-img-top" alt="post" />
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-bolder">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="d-flex text-center">
                                <div style={{ flex: 1 }}>Date</div>
                                <div style={{ flex: 1 }}>Catergories</div>
                                <div style={{ flex: 1 }}>Tags</div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default PostSection;