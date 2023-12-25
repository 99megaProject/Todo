import { createContext, useContext } from "react";

export const TodoContext = createContext({  // context making with default arguments
    todos: [
        {
            id: 1,
            todo: "raja",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deletedTodo: (id) => { },
    toggleComplete: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider // context provider 