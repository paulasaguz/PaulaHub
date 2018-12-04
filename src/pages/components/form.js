import React from 'react';
import New from '../../icons/components/new'
import './form.css';

function Form({ handleSubmit, setRef }) {
  return (
    <div className="Form">
      <form onSubmit={handleSubmit} ref={setRef}>
        <input className="search" type="text" placeholder="Find Username..." name="username" />
      </form>
      <button className="FormButton greyButton">Type All</button>
      <button className="FormButton greyButton">Language All</button>
      <button className="FormButton new"> <New height={16} size={12} color="white" view="0 0 12 16"/> New </button>
    </div>
  )
}

export default Form
