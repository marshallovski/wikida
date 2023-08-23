import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from './App';
import Article from './pages/Article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>404 - Page not found</p>
  },
  {
    path: '/article/:id',
    element: <Article />,
    errorElement: <p>Some error happened!</p>
  }
]);

ReactDOM.createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

