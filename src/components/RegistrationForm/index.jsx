import React, { Component } from 'react';

import './styles.css'

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text= "";
  }

  handleChangeTitle(event) {
    event.stopPropagation()
    this.title = event.target.value;
  }

  handleChangeText(event) {
    event.stopPropagation()
    this.text = event.target.value;
  }

  handleCreateNote(event) {
    event.preventDefault();
    event.stopPropagation()
    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
     <form className="registration-form"
      onSubmit={this.handleCreateNote.bind(this)}
     >
       <input 
          type="text" 
          placeholder="Título"
          className="registration-form_input"
          onChange={this.handleChangeTitle.bind(this)}
       />
        <textarea 
          placeholder="Escreva sua nota..."
          className="registration-form_input" 
          onChange={this.handleChangeText.bind(this)}
        />
        <button className="registration-form_submit">
          Criar nota
        </button>
      </form>
    )  
  }
}

export default RegistrationForm;