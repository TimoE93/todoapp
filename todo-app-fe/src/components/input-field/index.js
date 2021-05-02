import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.state.value);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div className="input-container">
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    <button type="submit"><FontAwesomeIcon icon={faPlusSquare} onClick={this.handleClick}></FontAwesomeIcon></button>
                </form>
            </div>
        )
    }
}

export default InputField;