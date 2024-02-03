import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./scenes/Login.jsx";
import Register from "./scenes/Register.jsx";
import Home from "./scenes/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
