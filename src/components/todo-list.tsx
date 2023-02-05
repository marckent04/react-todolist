import { Todo } from "../models/Todo.model";
import { useTodosContext } from "../stores/todos/todos.store";
import {
  TodosActions,
  UpdateTodoStatusPayload,
} from "../stores/todos/todos.store.types";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const { dispatch, state } = useTodosContext();
  const updateTodoStatus = (todo: Todo, value: boolean) => {
    dispatch({
      type: TodosActions.UPDATE_STATUS,
      payload: {
        todo,
        value,
      } as UpdateTodoStatusPayload,
    });
  };

  return (
    <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {state.visibleTodos.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          onChangeHandler={(value) => {
            updateTodoStatus(todo, value);
          }}
        />
      ))}
    </div>
  );
}
