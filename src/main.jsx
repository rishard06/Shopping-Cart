import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './styles/index.css'
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx';
import Shop from './routes/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "/home", element: <Home />},
      {path: "/shop", element: <Shop />}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
