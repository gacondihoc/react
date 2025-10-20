import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './todo.css'
import TodoData from './TodoData'
import TodoNew from './TodoNew'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])

    const deleteData = (id) => {
        let newTodo = todoList.filter((item) => item.id !== id)
        setTodoList(newTodo)
        console.log(todoList)
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 10000000),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteData={deleteData}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} alt="reactLogo" className='logo' />
                </div>
            }
        </div>
    )

}

export default TodoApp;