import './App.css';
import { Route,Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/register" element={<Register></Register>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/success" element={<h1>Logged In successfully</h1>} />
          </Routes>
    </div>
  );
}

export default App;
