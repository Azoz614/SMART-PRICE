import Login from './Components/Login/Login'
import Create from './Components/Create/Create'
import OTP from './Components/OTP/OTP'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/create",
    element: <Create />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/otp",
    element: <OTP />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
