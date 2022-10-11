import "./app.scss";
import Login from "./components/login/Login";

function App({ authService }) {
  return (
    <div className="app">
      <Login authService={authService} />
    </div>
  );
}

export default App;
