import React from "react";
import InputField from "../input-field";
import TodoTable from "../todo-table";
import {todos} from "../../data/todos"

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            todos: todos
        });
    }

    addTodo(name) {
        let todos = this.state.todos.slice();
        todos.push({name: name, status: false});
        this.setState({
            todos: todos
        });
    }

    deleteTodo(index) {
        let todos = this.state.todos.slice();
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

    render() {
        return (
            <div className="todolist">
                <h2>ToDoList</h2>
                <InputField onClick={this.addTodo}/>
                <TodoTable todos={this.state.todos} onDelete={this.deleteTodo}/>
            </div>
        )
    }
}

export default ToDoList;