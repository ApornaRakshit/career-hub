import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics'
import JobApply from './components/JobApply'
import Blog from './components/Blog'
import StarApply from './components/StarApply'
import Home from './components/Home'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
    {
      path:'/',
      element:<Home />,
    },
    {
      path:'statistics',
      element: <Statistics />,
    },
    {
      path:'apply',
      element: <JobApply />,
    },
    {
      path:'blog',
      element: <Blog />,
    },
    {
      path:'starApply',
      element: <StarApply />,
    },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router= {router} />
)
