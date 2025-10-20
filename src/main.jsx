import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import LoginPage from './pages/login';
import ProductsPage from './pages/products';
import RegisterPage from './pages/register';
import UsersPage from './pages/users';
import './styles/global.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UsersPage />
      },
      {
        path: "/products",
        element: <ProductsPage />
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
