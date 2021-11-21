import React, { Component } from "react";

class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        }

        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        const url = "http://127.0.0.1:8000/api/list/";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    posts: data,
                })

                console.log(this.state.posts);

            })
    }

    render() {
        return (
            <div className="col-md-8 p-3 col-12">
                <Renderposts posts={this.state.posts} />
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
                <div className="container border my-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Heading</h1>
                        </div>
                    </div>
                    <div className="row border">
                        <div className="col-4">author</div>
                        <div className="col-4">tag</div>
                        <div className="col-4">date</div>
                    </div>
                    <div className="row py-3">
                        <div className="col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sint, adipisci doloribus voluptatem natus culpa earum inventore cupiditate! Labore, eius!</div>
                    </div>
                    <div className="row text-center">
                        <span className="col-4">like</span><span className="col-4">comment</span><span className="col-4">share</span>
                    </div>
                </div>
        )})
    )
}

export default PostSection;