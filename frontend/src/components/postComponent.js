import React, { Component } from "react";

class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
        }

    }


    

    render() {
        return (
            <div className="col-md-8 p-3 col-12">
                <div className="row">
                    <Renderposts posts={this.state.posts} />
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
        array.map(e => {
            return (
                <div class="card col-12 col-md-6">
                    <img src="https://source.unsplash.com/1600x900/?nature,water" class="card-img-top" alt="post"/>
                    <div class="card-body">
                        <h5 class="card-title fs-1 fw-bolder">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex text-center">
                            <div style={{flex: 1}}>Date</div>
                            <div style={{flex: 1}}>Catergories</div>
                            <div style={{flex: 1}}>Tags</div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default PostSection;