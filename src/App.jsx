import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <Routes>
      <Route index element={<Home />} />
      {isLoggedIn ? (
        <Route
          path={`${import.meta.env.VITE_ADMIN_PATH}`}
          element={<Admin />}
        />
      ) : (
        <Route path="login" element={<Login />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
