import { useState } from 'react'
import TaskForm from './TaskForm.jsx'
import TaskItem from './TaskItem.jsx'

function TaskBoard() {
  const [tasks, setTasks] = useState([])

  function handleAdd(text) {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="task-board">
      <h1 className="task-board__title">タスクボード</h1>
      <TaskForm onAdd={handleAdd} />
      {tasks.length === 0 ? (
        <p className="task-board__empty">タスクはまだありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskBoard
