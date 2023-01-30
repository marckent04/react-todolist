import { Todo } from "../models/Todo.model";
import { TodoItem } from "./todo-item";

interface TodoListProps {
  todos: Todo[];
  updateTodoStatusHandler: (todo: Todo, value: boolean) => void;
}

export function TodoList({ todos, updateTodoStatusHandler }: TodoListProps) {
  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          onChangeHandler={(value) => {
            updateTodoStatusHandler(todo, value);
          }}
        />
      ))}
    </div>
  );
}
