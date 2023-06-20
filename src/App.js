import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";

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
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
