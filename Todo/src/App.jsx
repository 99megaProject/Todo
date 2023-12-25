import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/index'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((oldTodos) => [{ id: Date.now(), ...todo }, ...oldTodos])
  }
  const updatedTodo = (id, todo) => {
    setTodos((oldTodos) => oldTodos.map((item) => (item.id === id ? todo : item)))
  }
  const deletedTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id != id))
  }

  const toggleComplete = (id) => {
    setTodos((oldTodos) => oldTodos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  }


  // use of useEffect

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) setTodos(todos)

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])





  return (
    <TodoProvider value={{ todos, addTodo, deletedTodo, toggleComplete, updatedTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider >
  )
}

export default App
