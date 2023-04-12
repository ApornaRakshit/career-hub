import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics'
import JobApply from './components/JobApply'
import Blog from './components/Blog'
import StarApply from './components/StarApply'
import Home from './components/Home'
import ViewDetail from './components/ViewDetail';
import ErrorPage from './components/error-page'


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
    {
      path:'viewDetail',
      element: <ViewDetail />,
    },

    ],
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
