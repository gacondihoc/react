
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/footer'
import Header from './components/layout/header'


// () =>{ }
const App = () => {



  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>

    /* {todoList.length > 0 &&
      <>
        <TodoData
          todoList={todoList}
        />

      </>
    }

    {todoList.length === 0 &&
      <div className="todo-image">
        <img src={reactLogo} alt="reactLogo" className='logo' />
      </div>
    } */
  )
}

export default App
