import "./App.css";
import UsersPage from "./components/usersPage/UsersPage";
import Contextdata from "./components/context/Contextdata";

function App() {
  return (
    <Contextdata>
      <UsersPage />
    </Contextdata>
  );
}

export default App;
