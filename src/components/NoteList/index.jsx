import React, { Component } from 'react';

import CardNote from '../CardNote';
import './styles.css';

class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("Work", "Work", "Studies").map((category, index) => {
          return (
            <li className="note-list_item" key={index}>
              <div>{category}</div>
              <CardNote />
            </li>            
          );
        })}
      </ul>
    )
  }
}

export default NoteList;