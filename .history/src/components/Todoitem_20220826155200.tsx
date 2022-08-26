import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
    removeTodo: (id:number) => void;
    toggleTodo: (id:nu)
}

const TodoItem: React.FC <ITodoItem> = (props) => {
  const { id, title, complete } = props;

  return <div>
    <input type='checkbox' checked ={complete}/>
    {title}
    <button>x</button>
  </div>;
};
export { TodoItem };
