import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateForm.css';
class CreateForm extends Component {
    
    state = {
        task: '', 
        completed: false
    }

    changeHandler(event) {
        this.setState({
                task: event.target.value
        })
    }

    submitHandler(event) {
        event.persist();
        event.preventDefault();
        this.props.create({...this.state, id: uuidv4()});
        this.setState({ task: '' });
    }

    render() {
        return (
            <div className="Form">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <input 
                    onChange={this.changeHandler.bind(this)}
                    value={this.state.task}
                    />
                    <button> Save </button>
                </form>
            </div>
        )
    }
}

export default CreateForm;