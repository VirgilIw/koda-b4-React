import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPasword";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import CheckoutProduct from "./pages/CheckoutProduct";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/detail-product", element: <DetailProduct /> },
        { path: "/checkout-product", element: <CheckoutProduct /> },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
