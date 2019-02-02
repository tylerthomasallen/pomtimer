import React, { Component } from 'react';
import './todos.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedTodo: ""
        }
    }

    addChecked = (e) => {
        let { checkedTodo } = this.state;
        debugger;
        checkedTodo.length > 0 ? checkedTodo = "" : checkedTodo = "checkedTodo";
        this.setState({ checkedTodo });
        debugger;
    }


    render() {
        const { todo, deleteTodo } = this.props;
        const { checkedTodo } = this.state;
        return(
            <div>
                <label className={`todo-item ${checkedTodo}`}>
                    <input type="checkbox" onChange={this.addChecked} />
                    <span className="checkmark"></span>
                    {todo}
                </label>
                <span className="delete" onClick={() => deleteTodo(todo)}>Delete</span>

            </div>
        )
    }
}

export default ToDoItem;