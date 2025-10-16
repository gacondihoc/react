import reactLogo from './assets/react.svg'
import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'

// () =>{ }
const App = () => {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  const addNewTodo = (name) => {
    alert(`call ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        address={data.address}
        country={data.country}
        data={data}

      />
      <div className="todo-image">
        <img src={reactLogo} alt="reactLogo" className='logo' />
      </div>
    </div>
  )
}

export default App
