import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import AddTodo from "./components/Content/AddTodo";
import TodoToday from "./components/Content/TodoToday";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.cookie) navigate("/home");
    else navigate("/login");
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route path="addTodo" element={<AddTodo />} />
        <Route path="addTodoToday" element={<TodoToday />} />
      </Route>
    </Routes>
  );
}

export default App;
