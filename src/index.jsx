import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter >
//   <HashRouter basename="/">
//     <App />
//     </HashRouter>
//   </BrowserRouter>
// );

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

