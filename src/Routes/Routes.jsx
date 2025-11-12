import React from 'react';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import { createBrowserRouter } from 'react-router';
import AllModels from '../Pages/AllModels';
import Login from '../Components/LoginOut/Login';
import Register from '../Components/LoginOut/Register';
import PrivateRoutes from './PrivateRoutes';
import ModelDetails from '../Components/AiModels/ModelDetails';
import AddModel from '../Pages/AddModel';
import UpdateModel from '../Components/AiModels/UpdateModel';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="w-full h-full flex justify-center mt-2.5">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/allmodels',
        element: <AllModels />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/modeldetails/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5001/modeldetails/${params.id}`),
        element: (
          <PrivateRoutes>
            <ModelDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: '/updatemodel/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5001/modeldetails/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateModel />
          </PrivateRoutes>
        ),
      },
      {
        path: '/addmodel',
        element: (
          <PrivateRoutes>
            <AddModel />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
