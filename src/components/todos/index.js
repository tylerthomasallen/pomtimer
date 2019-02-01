import React, { Component } from 'react';
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

    render() {
        const { input, todos } = this.state;
        return(
            <div className="todos-container">
                <h1>TO-DO LIST</h1>

                <form onSubmit={this.addTodo} className="todo-form">
                    <input type="text" value={input} onChange={this.updateInput} />
                    <input type="submit" value="Add" className="submit"/>
                </form>

                {todos.map((todo, i) => {
                    return <span key={i}>{todo}</span>
                })}

            </div>
        )
    }
}

export default ToDos;