import React, {Component} from 'react';


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

    render() {

        let whatToShow;
        if(this.state.editing) {
            whatToShow = (
                <div>
                    <form onSubmit={this.submitHandler.bind(this)}>
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
                <div>
                    <h5>{this.props.task}</h5>
                    <button onClick={this.toggle.bind(this)}>edit</button>
                    <button onClick={this.deleteHandler.bind(this)}>X</button>
                </div>
            )
        }

        return (
            <div>
            {whatToShow}
            </div>
        )
    }

}

export default List;