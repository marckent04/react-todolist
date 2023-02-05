import React, { createContext, useContext, useReducer } from "react";
import { TodoReducerType, todosReducer } from "./todos.reducer";
import { initialTodosState } from "./todos.state";
import { TodoAction, TodoState } from "./todos.store.types";

type TodosContext = {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
};

const Context = createContext<TodosContext>(undefined as any);

export const TodosProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer<TodoReducerType, TodoState>(
    todosReducer,
    initialTodosState,
    (s) => s,
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useTodosContext = () => {
  return useContext(Context);
};
