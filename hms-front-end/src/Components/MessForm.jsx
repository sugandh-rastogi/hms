import React from 'react';
import H3 from './H3';

import Btn from './Btn';



function MessForm(props){

  const [inputValue,setInputValue]=React.useState('');

  const onInputChange=(event)=>{
    setInputValue(event.target.value);
  }

  const saveTodo=()=>{
    props.onCreate(inputValue);
    setInputValue("");
    props.onClose();
  }
  return(
    <div className="border rounded-md shadow-sm  p-4 my-3">
        <H3>Add an item</H3>
          <input value={inputValue} onChange={onInputChange} placeholder="Write an article "></input>
          <div className="flex space-x-4">
          <Btn  onClick={saveTodo}>Save</Btn>
          <Btn t onClick={props.onClose}>Cancel</Btn>
          </div>
      </div>
  );
}

export default MessForm;