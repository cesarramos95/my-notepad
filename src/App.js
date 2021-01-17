import React from 'react';

import './assets/App.css';
import './assets/index.css';

import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <section className="content">
      <RegistrationForm />
      <NoteList />
    </section> 
  )
}

export default App;
