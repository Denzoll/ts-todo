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
  const handleKeyDown: <React.KeyboardEventHandlerHTMLInputElement></React.KeyboardEventHandlerHTMLInputElement> = (e)

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
  useEffect(()=> {
    if (inputRef.current)
inputRef.current.focus()
  },[])

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange} onKeyDown={} ref={inputRef}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};

export { App };
