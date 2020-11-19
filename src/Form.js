import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            surname: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, surname, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Имя</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="surname">Фамилия</label>
                <input 
                    type="text" 
                    name="surname" 
                    id="surname"
                    value={surname} 
                    onChange={this.handleChange} />
                <label for="job">Группа</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Добавить
                </button>
            </form>
        );
    }
}

export default Form;