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
        const { todo } = this.props;
        const { checkedTodo } = this.state;
        return(
            <label className={`todo-item ${checkedTodo}`}>
                <input type="checkbox" onChange={this.addChecked} />
                <span className="checkmark"></span>
                {todo}
            </label>
        )
    }
}

export default ToDoItem;