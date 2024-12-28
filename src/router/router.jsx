
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../MainLayout";
import Register from "../pages/Register";
import PrivateRoute from "../router/PrivateRoute"
import Home from "../Home";
import AddCourse from "../pages/AddCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute>
          <Home/>
        </PrivateRoute>
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/addCourse",
        element: <AddCourse/>
      }
    ]
  }
]);

