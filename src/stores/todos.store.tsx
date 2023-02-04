import { FilterStateEnum } from "../components/filter-items-select";
import { Todo } from "../models/Todo.model";

export enum TodosActions {
  ADD = "ADD",
  UPDATE_STATUS = "UPDATE_STATUS",
  FILTER = "FILTER",
  REFRESH_FILTER = "REFRESH_FILTER",
}

interface TodoState {
  all: Todo[];
  visibleTodos: Todo[];
  filterStatus: FilterStateEnum;
}

interface TodoAction {
  type: TodosActions;
  payload?: any;
}

export interface UpdateTodoStatusPayload {
  todo: Todo;
  value: boolean;
}

const filterTodos = (
  state: TodoState,
  filterState: FilterStateEnum,
): TodoState => {
  switch (filterState) {
    case FilterStateEnum.COMPLETED:
      return {
        ...state,
        visibleTodos: state.all.filter((todo) => todo.done),
        filterStatus: FilterStateEnum.COMPLETED,
      };
    case FilterStateEnum.TODO:
      return {
        ...state,
        visibleTodos: state.all.filter((todo) => !todo.done),
        filterStatus: FilterStateEnum.TODO,
      };
    default:
      return {
        ...state,
        visibleTodos: state.all,
        filterStatus: FilterStateEnum.ALL,
      };
  }
};

const updateTodoStatus = (
  state: TodoState,
  payload: UpdateTodoStatusPayload,
) => {
  const index = state.all.findIndex((t) => t.id === payload.todo.id);
  const newTodos = [...state.all];
  newTodos[index] = { ...payload.todo, done: payload.value };
  return {
    ...state,
    all: [...newTodos],
  };
};

export function todosReducer(state: TodoState, action: TodoAction) {
  console.log(action);

  switch (action.type) {
    case TodosActions.ADD:
      return {
        ...state,
        all: [Todo.create(action.payload as string), ...state.all],
      };
    case TodosActions.UPDATE_STATUS:
      return updateTodoStatus(state, action.payload);
    case TodosActions.FILTER:
      return filterTodos(state, action.payload);
    case TodosActions.REFRESH_FILTER:
      console.log(state.filterStatus);

      return filterTodos(state, state.filterStatus);
    default:
      throw new Error();
  }
}

export const initialTodosState: TodoState = {
  all: [],
  filterStatus: FilterStateEnum.ALL,
  visibleTodos: [],
};
