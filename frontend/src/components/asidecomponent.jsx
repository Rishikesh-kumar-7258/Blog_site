import React , {Component} from "react";

class Aside extends Component{
    constructor(props)
    {
        super(props);

        this.state = {

        }

    }


    render()
    {
        return (
            <aside className="col-md-4 col-12 p-3">
                <h4>Most popular posts</h4>
                <div className="list-group">
                    <div className="list-group-item">one</div>
                    <div className="list-group-item">two</div>
                    <div className="list-group-item">three</div>
                </div>
            </aside>
        )
    }
}

export default Aside;