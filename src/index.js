import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Search from './MovieComponent/Search';
import Movie from './MovieComponent/Movie';
import { Home } from './MovieComponent/Home';
import NotFound from './MovieComponent/NotFound';
import App from './AppComponent/App'
import { MovieProvider } from './contextStore/context';
import { DetailedMovie } from './MovieComponent/SingleMovie';

const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);

const router = createBrowserRouter([
    // {path:'/',element:<App/>},
    {path:'/',element:<Home></Home>},
    {path:'/search',element:<Search/>},
    {path:'/movie',element:<Movie/>},
    {path:'/movie/:ID',element:<DetailedMovie/>},
    {path:'*',element:<NotFound/>},
])


root.render(<React.StrictMode><MovieProvider><RouterProvider router={router}/></MovieProvider></React.StrictMode>);



