import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/about',
    element: <p>About page</p>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router= {router} />
)
