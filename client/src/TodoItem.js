import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from "uuid";

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: "",
            completed: "",
            itemsList: [
                {id: uuidv4(), todo: "Take out the trash", completed: false},
                {id: uuidv4(), todo: "Water the plants", completed: false},
                {id: uuidv4(), todo: "Grocery shopping", completed: false},
                {id: uuidv4(), todo: "Learn Python", completed: false}
            ]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkBox = this.checkBox.bind(this)
    }

    handleChange(e) {
        this.setState({ todo: e.target.value });

    }

    handleSubmit(n) {
        this.setState({
            itemsList: [...this.state.itemsList, {  id: uuidv4(), todo: this.state.todo, completed: false }],
        })
    }

    checkBox(id) {
        this.setState(prev => {
            const newList = prev.itemsList.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                }
                return todo
            })
            return { itemsList: newList }
        })
    }

    render() {
        return (

            <div className="container p-5">
                <h3 className="mb-4">To Do List</h3>

              


            <input 
              className="form-control mb-2" 
              type="text"
              placeholder="Add new item"
              value={this.state.todo}
              onChange={this.handleChange}/>
             

             <button className="button btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              
            
              <div>
                  
                  {this.state.itemsList.map((item, id) => 
                

                  (<p className="todo-item">{item.todo}{item.completed}
                 
                 <input
                    className="input-checkbox"
                    type="checkbox" 
                    checked={item.completed}
                    onChange={() => this.checkBox(item.id)} 
                    /></p>))}
                   
              </div>
            </div>
        );
    }
}

export default TodoItem;