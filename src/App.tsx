import React, { useMemo, useState } from "react";
import "./App.css";
import { AddTodoForm } from "./components/add-todo-form";
import {
  FilterItemsSelect,
  FilterStateEnum,
} from "./components/filter-items-select";
import { TodoList } from "./components/todo-list";
import { Todo } from "./models/Todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    Todo.create("Reveiller a 13h"),
    Todo.create("Manger"),
    Todo.create("Glacier"),
  ]);

  const [filterState, setfilterState] = useState<FilterStateEnum>(
    FilterStateEnum.ALL,
  );

  const addTodo = (todo: string) => {
    setTodos([Todo.create(todo), ...todos]);
  };

  const updateTodoStatus = (todo: Todo, value: boolean) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    const newTodos = [...todos];
    newTodos[index] = { ...todo, done: value };
    setTodos(newTodos);
  };

  const filterTodos = () => {
    switch (filterState) {
      case FilterStateEnum.COMPLETED:
        return todos.filter((todo) => todo.done);

      case FilterStateEnum.TODO:
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  };

  const visibleTodos = useMemo(filterTodos, [todos, filterState]);

  return (
    <div className="container mx-auto py-4 max-sm:px-3">
      <h1 className="text-center text-blue-700 font-bold text-xl mb-3">
        Ma TODOLIST
      </h1>
      <AddTodoForm handler={addTodo} />
      <div className="w-full flex justify-end mt-4">
        <FilterItemsSelect onChange={(state) => setfilterState(state)} />
      </div>
      <div className="mt-4">
        <TodoList
          todos={visibleTodos}
          updateTodoStatusHandler={updateTodoStatus}
        />
      </div>
    </div>
  );
}

export default App;
