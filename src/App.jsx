import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/account" element={<h1>account</h1>} />
        <Route path="/shop" element={<h1>shop</h1>} />
        <Route path="/search" element={<h1>search</h1>} />
        <Route path="/cart" element={<h1>cart</h1>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
