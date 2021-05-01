import React from "react";

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
            <div className="input">
                <form>
                    <input type="text" name="todoInput" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="button" value="Add ToDo"onClick={this.handleClick}></input>
                </form>
            </div>
        )
    }
}

export default InputField;