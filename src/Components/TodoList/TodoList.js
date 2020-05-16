import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem'
import CreateForm from '../CreateForm/CreateForm'
 
class TodoList extends Component {

    state = {
        todos: [
            // {task: 'hello' , id: 7}
        ]
    }

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

    //8, 'hello again' || old = {id: 8, task: 'hello'}
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

    render() {
        let list = this.state.todos.map((each) => {
            return (
                <ListItem 
                    task={each.task} 
                    id={each.id} 
                    delete={this.deleteHandler}
                    task={each.task}
                    update={this.update}
                    />
            ) 
        })
        return (
            <div>
                <CreateForm 
                create={this.stateHandler}
                />
                {list}
            </div>
        )
    }

}

export default TodoList;