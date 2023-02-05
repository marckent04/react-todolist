import { useTodosContext } from "../stores/todos/todos.store";
import { TodosActions } from "../stores/todos/todos.store.types";

export enum FilterStateEnum {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  TODO = "TODO",
}

export function FilterItemsSelect() {
  const { dispatch } = useTodosContext();

  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch({
      type: TodosActions.FILTER,
      payload: e.target.value as FilterStateEnum,
    });
  };
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={onChangeHandler}
    >
      <option value={FilterStateEnum.ALL}>Tout</option>
      <option value={FilterStateEnum.COMPLETED}>Terminés</option>
      <option value={FilterStateEnum.TODO}>A faire</option>
    </select>
  );
}
