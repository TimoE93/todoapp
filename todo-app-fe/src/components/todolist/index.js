import React from "react";
import InputField from "../input-field";
import TodoTable from "../todo-table";
import { client } from '../../apollo_client/index';
import { GET_ALL_TODOS } from '../../apollo_client/queries';
import { CREATE_TODO } from '../../apollo_client/mutations';
import { gql } from '@apollo/client';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: true
        }

        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        const thisForTimeout = this;
        setTimeout(function () {
            client
            .query({
                query: GET_ALL_TODOS
            })
            .then(result => {
                const {data} = result;
                thisForTimeout.setState({
                    todos: data.allTodos,
                    isLoading: false
                });
            });
        }, 5000);
    }

    addTodo(name) {
        // let todos = this.state.todos.slice();
        // todos.push({ name: name, status: false });
        // this.setState({
        //     todos: todos
        // });
        this.setState({
            isLoading: true
        })
        client.mutate({mutation: CREATE_TODO, variables: {name: name}, awaitRefetchQueries: true}).then(result => {
            client
            .query({
                query: GET_ALL_TODOS,
                fetchPolicy: "no-cache"
            })
            .then(result => {
                const {data} = result;
                this.setState({
                    todos: data.allTodos,
                    isLoading: false
                });
            });
        })
    }

    deleteTodo(index) {
        let todos = this.state.todos.slice();
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

    render() {
        if ( this.state.isLoading ) {
            return (
                <div className="todolist">
                <h2>ToDoList is loading...</h2>
                </div>
            )
        }
        return (
            <div className="todolist">
                <h2>ToDoList</h2>
                <InputField onClick={this.addTodo} />
                <TodoTable todos={this.state.todos} onDelete={this.deleteTodo} />
            </div>
        )
    }
}

export default ToDoList;