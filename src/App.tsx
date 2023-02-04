import React, { useEffect, useReducer } from "react";
import "./App.css";
import { AddTodoForm } from "./components/add-todo-form";
import { FilterItemsSelect } from "./components/filter-items-select";
import { TodoList } from "./components/todo-list";
import { Todo } from "./models/Todo.model";
import {
  initialTodosState,
  TodosActions,
  todosReducer,
  UpdateTodoStatusPayload,
} from "./stores/todos.store";

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialTodosState);

  const addTodo = (todo: string) => {
    dispatch({
      type: TodosActions.ADD,
      payload: todo,
    });
  };

  const updateTodoStatus = (todo: Todo, value: boolean) => {
    dispatch({
      type: TodosActions.UPDATE_STATUS,
      payload: {
        todo,
        value,
      } as UpdateTodoStatusPayload,
    });
  };

  // const filterTodos = () => {
  //   switch (filterState) {
  //     case FilterStateEnum.COMPLETED:
  //       return todos.filter((todo) => todo.done);

  //     case FilterStateEnum.TODO:
  //       return todos.filter((todo) => !todo.done);
  //     default:
  //       return todos;
  //   }
  // };

  useEffect(() => {
    dispatch({
      type: TodosActions.REFRESH_FILTER,
    });
  }, [state.all]);
  return (
    <div className="container mx-auto py-4 max-sm:px-3">
      <h1 className="text-center text-blue-700 font-bold text-xl mb-3">
        Ma TODOLIST
      </h1>
      <AddTodoForm handler={addTodo} />
      <div className="w-full flex justify-end mt-4">
        <FilterItemsSelect
          onChange={(state) =>
            dispatch({
              type: TodosActions.FILTER,
              payload: state,
            })
          }
        />
      </div>
      <div className="mt-4">
        <TodoList
          todos={state.visibleTodos}
          updateTodoStatusHandler={updateTodoStatus}
        />
      </div>
    </div>
  );
}

export default App;
