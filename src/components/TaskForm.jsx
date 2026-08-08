import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="新しいタスクを入力"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="task-form__button">
        追加
      </button>
    </form>
  )
}

export default TaskForm
