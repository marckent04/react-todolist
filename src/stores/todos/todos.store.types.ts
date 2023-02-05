import { FilterStateEnum } from "../../components/filter-items-select";
import { Todo } from "../../models/Todo.model";

export enum TodosActions {
  ADD = "ADD",
  UPDATE_STATUS = "UPDATE_STATUS",
  FILTER = "FILTER",
  REFRESH_FILTER = "REFRESH_FILTER",
}

export interface TodoState {
  all: Todo[];
  visibleTodos: Todo[];
  filterStatus: FilterStateEnum;
}

export interface TodoAction {
  type: TodosActions;
  payload?: any;
}

export interface UpdateTodoStatusPayload {
  todo: Todo;
  value: boolean;
}
