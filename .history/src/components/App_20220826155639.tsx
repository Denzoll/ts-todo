import { useState, useRef, useEffect} from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./todolist";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') addTodo()
  }

  const addTodo = () => {
    if(value)
 {   setTodos([
      ...todos,
      {
        id: Date.now(),
        title: value,
        complete: false,
      },
    ]);}
    setValue('')
  };

  const removeTodo = (id:number): void => {
    setTodos(todos.filter(todo => todo.id !==id))
  }

  const toggletodo = (id:number): void => {
    setTodos(todos.map(todo => {
      if
    }))
  }

  useEffect(()=> {
    if (inputRef.current)
inputRef.current.focus()
  },[])

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggletodo} />
    </div>
  );
};

export { App };
