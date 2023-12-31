import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import { Route } from 'react-router-dom'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<App/>,
//       children:[
//         {path:"",element:<Home/>},
//         {path:"about",element:<About/>},
//         {path:"contact",element:<Contact/>}
//       ]
//     }
//   ]
// )

// SYNTAX II 

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route 
      loader={githubInfoLoader}
      path='github'
       element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
