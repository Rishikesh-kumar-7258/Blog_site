import React, {Component} from "react";

class PostSection extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            posts : null,
        }

        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount()
    {
        this.getPosts();
    }

    getPosts()
    {
        const url = "http://127.0.0.1:8000/api/list/";

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                posts : data,
            })
        })
    }

    render()
    {
        return(
            <>
            <Renderposts posts={this.state.posts}/>
            </>
        )
    }
}

const Renderposts = (props) => {
    return (
        
        props.posts.map((element, index) => {
            return (
                <div key={index}>
                    <h1>{element.title}</h1>
                    <p>{element.content}</p>
                </div>
            )
        })
    )
}

export default PostSection;