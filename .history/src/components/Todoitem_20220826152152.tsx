import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {}

const TodoItem: React.FC <ITodoItem> = (props) => {
  const { id, title, complete } = props;

  return <div>
    <input type=''></input>
  </div>;
};
export { TodoItem };
