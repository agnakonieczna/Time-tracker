import React from "react";
import uniqid from 'uniqid';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameErr: '',
      description: '',
      descriptionErr: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  validation = () => {
    const { name, description } = this.state;

    let nameError;
    let descriptionError;

    if (!name.length) {
      nameError = 'Task name is invalid';
    }

    if (!description.length) {
      descriptionError = 'Task description is invalid';
    }

    if (nameError || descriptionError) {
      this.setState({
        nameErr: nameError,
        descriptionErr: descriptionError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let isValid = this.validation();
    console.log(isValid);

    if (isValid) {
      this.setState({
        name: '',
        nameErr: '',
        description: '',
        descriptionErr: ''
      });

      this.props.addTasks({
        id: uniqid(),
        name: this.state.name,
        description: this.state.description,
        status: "open",
        timeSpent: 0,
        operations: [],
      });
    }
  };

  render() {
    return (
      <form className='task-form' onSubmit={this.handleSubmit}>
        <h2 className='task-form__title'>What would you work on?</h2>
        <input
          className='task-form__input task-form__input-name'
          value={this.state.name}
          onChange={this.handleChange}
          type='text'
          id='name'
          name='title'
          placeholder='Task title'
        />
        {this.state.nameErr && <p className='error-msg'>{this.state.nameErr}</p>}
        <input
          className='task-form__input task-form__input-description'
          value={this.state.description}
          onChange={this.handleChange}
          type='text'
          id='description'
          name='description'
          placeholder='Task description'
        />
        {this.state.descriptionErr && <p className='error-msg'>{this.state.descriptionErr}</p>}
        <input className='task-form__input-submit' type='submit' value='Add' />
      </form>
    );
  }
}
