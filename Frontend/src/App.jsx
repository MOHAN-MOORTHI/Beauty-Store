import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Myaccount from "./pages/Myaccount.jsx";
import Announcement from "./components/Announcement.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/myaccount",
          element: <Myaccount />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
