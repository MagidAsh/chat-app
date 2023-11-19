import { Switch, Route } from "react-router-dom";

// Contexts
import AuthContextProvider from "./context/AuthContextProvider";

// Components
import Login from "./components/Login";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/chats"  component={Chats} />
          <Route path="/"  component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
