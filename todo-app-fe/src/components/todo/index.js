import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onDelete(this.props.index);
    }

    render() {

        return (
            <li>
                <form className="todo">
                    <label>{this.props.todo.name}</label>
                    <button type="submit" className="delete"><FontAwesomeIcon icon={faTrash} onClick={this.handleClick}></FontAwesomeIcon></button>
                </form>
            </li>
        )
    }
}

export default ToDo;