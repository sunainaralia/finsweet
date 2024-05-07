import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Pages/Home.jsx'
import Blog from './Components/Pages/Blog.jsx'
import AboutUs from './Components/Pages/AboutUs.jsx'
import ContactUs from './Components/Pages/ContactUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
let router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: 'blog/', element: <Blog /> },
      { path: 'aboutus/', element: <AboutUs /> },
      { path: 'contactus/', element: <ContactUs /> }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
