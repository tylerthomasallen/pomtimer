import React, { Component } from 'react';
import ToDoItem from './todoItem';
import './todos.css';

class ToDos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ""
        }
    }

    updateInput = (e) => {
        this.setState({input: e.target.value})
    }

    addTodo = (e) => {
        e.preventDefault();
        let { todos, input } = this.state;
        todos.push(input);
        input = "";
        this.setState({todos, input});
    }

    deleteTodo = (todo) => {
        let { todos } = this.state;
        let idx = todos.indexOf(todo)
        if (idx > -1 ) {
            todos.splice(idx, 1);
        }
        this.setState({todos});
    }

    render() {
        const { input, todos, checkedTodo } = this.state;
        return(
            <div className="todos-container">
                <h1>TO-DO LIST</h1>

                <form onSubmit={this.addTodo} className="todo-form">
                    <input type="text" value={input} onChange={this.updateInput} />
                    <input type="submit" value="Add" className="submit"/>
                </form>

                <div className="todo-items">
                    {todos.map((todo, i) => {
                        return <ToDoItem todo={todo} key={i} deleteTodo={this.deleteTodo}/>
                    })}
                </div>

            </div>
        )
    }
}

export default ToDos;