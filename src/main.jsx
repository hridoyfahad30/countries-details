import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Countries from './component/Countries/Countries';
import CountryDetails from './component/CountryDetails/CountryDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: 'countries',
        element: <Countries></Countries>,
        loader: ()=> fetch(`https://restcountries.com/v3.1/all`)
      },
      {
        path: `countries/:countryName`,
        element: <CountryDetails></CountryDetails>,
        loader: ({params})=> fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
