import { Todo } from "../models/Todo.model";

export function TodoItem({
  item,
  onChangeHandler,
}: {
  item: Todo;
  onChangeHandler: (value: boolean) => void;
}) {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    onChangeHandler(e.target.checked);

  return (
    <li className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
      <input
        checked={item.done}
        onChange={onChange}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <span className={`ml-3 text-lg ${item.done && "line-through"}`}>
        {item.label}
      </span>
    </li>
  );
}
