import React, { useEffect } from "react";
import "./App.css";
import { AddTodoForm } from "./components/add-todo-form";
import { FilterItemsSelect } from "./components/filter-items-select";
import { TodoList } from "./components/todo-list";

import { useTodosContext } from "./stores/todos/todos.store";
import { TodosActions } from "./stores/todos/todos.store.types";

function App() {
  const { state, dispatch } = useTodosContext();

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
      <AddTodoForm />
      <div className="w-full flex justify-end mt-4">
        <FilterItemsSelect />
      </div>
      <div className="mt-4">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
