import { Routes, Route } from "react-router-dom";

// Contexts
import AuthContextProvider from "./context/AuthContextProvider";

// Components
import Login from "./components/Login";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/chats"  element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
