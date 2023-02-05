import { FilterStateEnum } from "../../components/filter-items-select";
import { TodoState } from "./todos.store.types";

export const initialTodosState: TodoState = {
  all: [],
  filterStatus: FilterStateEnum.ALL,
  visibleTodos: [],
};
