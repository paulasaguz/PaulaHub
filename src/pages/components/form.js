import React from 'react';
import './form.css';

function Form({ handleSubmit, setRef }) {
  return (
    <form onSubmit={handleSubmit} ref={setRef}>
      <input className="search" type="text" placeholder="Find Username..." name="username" />
    </form>
  )
}

export default Form
