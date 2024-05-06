import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Blog from './Components/Blog.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ContactUs from './Components/ContactUs.jsx'
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
