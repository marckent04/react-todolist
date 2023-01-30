import { useState } from "react";

interface AddTodoFormProps {
  handler: (todo: string) => void;
}

export function AddTodoForm({ handler }: AddTodoFormProps) {
  const [todo, setTodo] = useState<string>("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handler(todo as string);
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label
          htmlFor="new_todo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ajouter un todo
        </label>
      </div>
      <div className="flex items-stretch">
        <input
          type="text"
          id="new_todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Ajouter nouvelle tache..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="px-7 text-base font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}
