import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Maker from "./components/maker/Maker";

function App({ FileInput, authService }) {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker authService={authService} FileInput={FileInput} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
