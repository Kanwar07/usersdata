import "./App.css";
import UsersPage from "./components/usersPage/UsersPage";
import Contextdata from "./components/context/Contextdata";
import NavBar from "./components/navbar/NavBar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    )
  );
  return (
    <>
      <Contextdata>
        <RouterProvider router={router} />
      </Contextdata>
    </>
  );
}

export default App;
