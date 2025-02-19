import { useEffect, useState } from "react";
import Todo from "./Todo";

let counter = 4;

const Todos = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym from 6 to 8",
    },
    {
      id: 2,
      title: "meeting with client",
      description: "us client meeting at 12",
    },
    {
      id: 3,
      title: "going to bank",
      description: "go to bank for money",
    },
  ]);

  function onclickButtonHandler() {
    setTodo([
      ...todo,
      {
        id: counter++,
        title: `Task ${counter}`,
        description: `Description ${counter}`,
      },
    ]);
  }
  useEffect(()=>{
    setInterval(()=>{
      fetch('/ndajifndjfnj')
      .then(async (res)=>{
        const data = await res.json();
        setTodo(data.todo)
      })
    },1000)
  },[])

  return (
    <div>
      <button onClick={onclickButtonHandler}>Add Todo</button>
      {todo.map((mp) => 
          <Todo key ={mp.id} stitle={mp.title} description={mp.description}/>
    )}
    </div>
  );
};

export default Todos;
