import React, {Component} from 'react';
import './ListItem.css'

class List extends Component {
    
    state = {
        task: this.props.task,
        editing : false
    }

    deleteHandler() {
        this.props.delete(this.props.id);
    }
    toggle() {
        this.setState({editing: !this.state.editing});
    }
    changeHandler = (event) => {
        event.persist()
        this.setState({ task: event.target.value });
    }
    submitHandler(event) {
        event.persist();
        event.preventDefault();
        //pass the data to the parent to update it there
        this.toggle();
        this.props.update(this.props.id, this.state.task);
    }
    toggleHandler() {
        this.props.toggleComplete(this.props.id);
    }

    render() {

        let whatToShow;
        if(this.state.editing) {
            whatToShow = (
                <div>
                    <form 
                    onSubmit={this.submitHandler.bind(this)}
                    className="ListItem">
                        <input 
                        name='task'
                        value={this.state.task}
                        onChange={this.changeHandler}
                        />
                        <button>save</button>
                    </form>
                </div>
            )
        } else {
            whatToShow = (
                <div className="ListItem">
                    <span 
                    className={this.props.completed ? "Completed" : "NotCompleted"}
                    onClick={this.toggleHandler.bind(this)}
                    >{this.props.task}</span>
                    <span>
                        <i onClick={this.toggle.bind(this)} className="far fa-edit"></i>
                        <i onClick={this.deleteHandler.bind(this)} class="far fa-trash-alt"></i>
                    </span>
                </div>
            )
        }

        return (
            <div className="Main">
            {whatToShow}
            </div>
        )
    }

}

export default List;