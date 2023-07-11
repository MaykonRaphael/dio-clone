import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { SignUp } from "./pages/SignUp";
import { AuthContextProvider } from "./context/auth";

const AuthProvider = () => (
  <AuthContextProvider>
    <Outlet/>
  </AuthContextProvider>
)

const router = createBrowserRouter([
  {
   element: <AuthProvider/>,
   children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: '/feed',
      element: <Feed />,
    },
    {
      path: '/signUp',
      element: <SignUp />
    }
   ] 
  }
  
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
