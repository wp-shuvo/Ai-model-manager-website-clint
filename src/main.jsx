import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import AuthProvider from './Context/AuthProvider.jsx';
import Routes from './Routes/Routes.jsx';
import Home from './Pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </StrictMode>
);
