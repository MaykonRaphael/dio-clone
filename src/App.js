import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { SignUp } from "./pages/SignUp";

const router = createBrowserRouter([
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
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
