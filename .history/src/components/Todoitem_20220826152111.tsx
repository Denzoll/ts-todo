import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {}

const TodoItem: React.FC = (props) => {
  const { id, title, complete } = props;

  return <div></div>;
};
export { TodoItem };
