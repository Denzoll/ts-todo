  import { ITodo } from "../types/data"
import { TodoItem } from "./Todoitem"
  interface ITodoListProps {
    items: ITodo [];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void
  }
  const TodoList: React.FC <ITodoListProps> =(props) => {
    const {}
    return <div>
        {props.items.map(todo => <TodoItem key={todo.id} {...todo} />)
        }
    </div>
}
export {TodoList}