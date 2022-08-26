import { useState, useRef} from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./todolist";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    setValue(e.target.value)
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

  return (
    <div>
      <div>
        <input value={value} onChange={handleChange}  ref={inputRef}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  );
};

export { App };
