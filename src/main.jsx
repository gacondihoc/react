import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import TodoApp from './components/todo/TodoApp.jsx';
import BooksPage from './pages/books.jsx';
import ErrorPage from './pages/error.jsx';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UsersPage from './pages/users';
import './styles/global.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UsersPage />
      },
      {
        path: "/books",
        element: <BooksPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
  ,
  {
    path: "/register",
    element: <RegisterPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
