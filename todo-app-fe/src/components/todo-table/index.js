import React from "react";
import ToDo from "../todo";

class TodoTable extends React.Component {
    render() {
        const todos = [];

        this.props.todos.forEach((element, index) => {
            console.log(index);
            todos.push(<ToDo todo={element} key={index} onDelete={this.props.onDelete}/>);
        });
        return (
            <div>
                <p>Todos:</p>
                <div className="todos">
                <ul >
                {todos}
                </ul>
                </div>
            </div>

        )
    }
}

export default TodoTable;