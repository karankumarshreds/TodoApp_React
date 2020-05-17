import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem'
import CreateForm from '../CreateForm/CreateForm'
import './TodoList.css'
 
class TodoList extends Component {

    state = {
        todos: [
            // {task: 'hello' , id: 7}
        ]
    }

    //passed down as create prop
    stateHandler = (data) => {
        this.setState((state) => {
            return {
                todos : [...state.todos, data]
            }
        })
    }

    deleteHandler = (id) => {
        this.setState({ todos: this.state.todos.filter(state => state.id != id)});
        // OR
        this.setState((state) => {
            return {
                todos : state.todos.filter((el) => {
                    return el.id !== id;
                })
            } 
        })
    }

    update = (id, data) => {
        const newList = this.state.todos.map((each)=>{
            if(each.id === id){
                return { ...each, task: data }
            } else {
                return each;
            }
        });
        this.setState({todos: newList});
        console.log(newList);
    }

    //passed down to ListItem as toggleComplete
    toggleCompletion = (id) => {
        const newList = this.state.todos.map((el) => {
            if(el.id === id){
                return {...el, completed: !el.completed};
            } else {
                return el;
            }
        });
        this.setState({ todos : newList });
    }

    render() {
        let list = this.state.todos.map((each) => {
            return (
                <ListItem 
                    task={each.task} 
                    id={each.id} 
                    delete={this.deleteHandler}
                    task={each.task}
                    update={this.update}
                    completed={each.completed}
                    toggleComplete={this.toggleCompletion}
                    />
            ) 
        })
        return (
            <div className="TodoList">
                <h1> To Do List !</h1>
                <span>Make sure you never miss a thing</span>
                <CreateForm 
                create={this.stateHandler}
                />
                {list}
            </div>
        )
    }

}

export default TodoList;