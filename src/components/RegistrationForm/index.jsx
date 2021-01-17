import React, { Component } from 'react';

import './styles.css'

class RegistrationForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
  }

  handleChangeTitle(e) {
    this.title = e.target.value;
    console.log(this.title)
  }

  render() {
    return (
     <form className="registration-form">
       <input 
          type="text" 
          placeholder="Título"
          className="registration-form_input"
          onChange={this.handleChangeTitle.bind(this)}
       />
        <textarea 
          placeholder="Escreva sua nota..."
          className="registration-form_input" 
        />
        <button className="registration-form_submit">
          Criar nota
        </button>
      </form>
    )  
  }
}

export default RegistrationForm;