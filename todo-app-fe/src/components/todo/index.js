import React from "react"

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onDelete(this.props.index);
    }

    render() {

        return (
            <li className="border">
                <label>{this.props.todo.name}</label>
                <input type="button" value="delete" onClick={this.handleClick}></input>
            </li>
        )
    }
}

export default ToDo;