import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import "./App.css";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "todos-v1";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? (parsed as Todo[]) : [];
    } catch {
      return [];
    }
  });

  // ✅ 保存：これが無い/動かないとリロードで消えます
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const sortedTodos = [...todos].sort(
    (a, b) => Number(a.completed) - Number(b.completed)
  );

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Todo</h1>

        <TodoForm onAdd={handleAddTodo} />

        <div style={{ height: 10 }} />

        <div className="row">
          <button
            className="btn danger"
            onClick={handleClearCompleted}
            disabled={!todos.some((t) => t.completed)}
          >
            完了を削除
          </button>

          <span className="badge">
            全{todos.length}件 / 未完了{todos.filter((t) => !t.completed).length}件
          </span>
        </div>

        <ul className="list">
          {sortedTodos.map((todo) => (
            <li className="item" key={todo.id}>
              <div className="itemLeft">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <span className={`text ${todo.completed ? "done" : ""}`}>
                  {todo.text}
                </span>
              </div>

              <button className="btn" onClick={() => handleDeleteTodo(todo.id)}>
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
