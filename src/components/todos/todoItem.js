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
            <div className="todo-item-parent">
                <label className={`todo-item ${checkedTodo}`}>
                    <input type="checkbox" onChange={this.addChecked} />
                    <span className="checkmark"></span>
                    {todo}
                </label>
                <i className="fas fa-trash-alt delete" onClick={() => deleteTodo(todo)}></i>
                {/* // <span className="delete" onClick={() => deleteTodo(todo)}>Delete</span> */}

            </div>
        )
    }
}

export default ToDoItem;