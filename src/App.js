import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './style.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./components/context/AuthContext";
function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  const ProtectRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={ <ProtectRoute>
           <Home />
          </ProtectRoute>
           } />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
