import React from 'react';
import TodoForm from './TodoForm';
import Button from'./Button';
import Row from './Row';


function Mess(props){

  const [messFormVisible,setMessFormVisibility]=React.useState(false);

  const [messList,setMessList]=React.useState(["Clean my computer","Buy a keyboard"]);

  const [doneList,setDoneList]=React.useState(["Write an article about @xstate/test"]);

  const showMessForm=()=>setMessFormVisibility(true);

  const hideMessForm=()=>setMessFormVisibility(false);

  const addTodo=(todo)=>{
    setMessList([...todoList,todo]);
  }

  const markAsDone=(todo)=>{
    const newTodoList=todoList.filter(e=>e!==todo);

    setTodoList(newTodoList);
    setDoneList([...doneList,todo]);
  }

const markNotAsDone=(todo)=>{
    const newDoneList=doneList.filter(e=>e!==todo);

    setDoneList(newDoneList);
    setTodoList([...todoList,todo]);
  }

  return(
    <>
      
        {todoList.map(e=><Row done={false} onStatusChange={markAsDone} key={e}>{e}</Row>)}
          {todoList.length===0 && <span className="text-base text-gray-500">No todos here!</span>}
       
        {!todoFormVisible && <Button onClick={showTodoForm} roundTheme="full">+ Add a todo</Button>}
      
         {todoFormVisible && <TodoForm onClose={hideTodoForm} onCreate={addTodo}/>}
    

        
        {doneList.map(e=><Row onStatusChange={markNotAsDone} done={true} key={e}>{e}</Row>)}
          {doneList.length===0 && <span className="text-base text-gray-500">No todos here!</span>}
        
    </>
  );
  
}

export default Mess;