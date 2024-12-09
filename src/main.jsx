import { createRoot } from "react-dom/client";
// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Women from "./Components/Women/Women";
import Men from "./Components/Men/Men";
import Kids from "./Components/Kids/Kids";
import Sports from "./Components/Sports/Sports";
import Brands from "./Components/Brands/Brands";
import New from "./Components/New";
import Sale from "./Components/Sale/Sale";
import Layout from "./Layout";
import { StrictMode } from "react";
// const router = createBrowserRouter({
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />,
//     },
//     {
//       path: "women",
//       element: <Women />,
//     },
//     {
//       path: "/men",
//       element: <Men />,
//     },
//     {
//       path: "/kids",
//       element: <Kids />,
//     },
//     {
//       path: "/sports",
//       element: <Sports />,
//     },
//     {
//       path: "/brands",
//       element: <Brands />,
//     },
//     {
//       path: "/new",
//       element: <New />,
//     },
//     {
//       path: "/sale",
//       element: <Sale />,
//     },
//   ],
// });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="women" element={<Women />} />
      <Route path="men" element={<Men />} />
      <Route path="kids" element={<Kids />} />
      <Route path="sports" element={<Sports />} />
      <Route path="brands" element={<Brands />} />
      <Route path="new" element={<New />} />
      <Route path="sale" element={<Sale />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
