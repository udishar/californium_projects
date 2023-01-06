import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider} from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:'/',
    element: <Navbar/>
  },
  {
    path:'/Login',
    element:<Login/>
  }
  ,{
    path:'/Register',
    element:<Register/>
  },
  {
    path: '/Home',
    element:<Home/>
  }
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
