import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import { useEffect } from "react";
import AddProjectDetailPopup from "./components/Popup/AddProjectDetailPopup";
import { useAppSelector } from "./hook/useAppSelector";
import ContentDetail from "./components/ContentDetail/ContentDetail";

function App() {
  const navigate = useNavigate();

  const isOpenDetailPopup = useAppSelector(
    (state) => state.popupReducer.openDetailPrPopup
  );

  useEffect(() => {
    if (document.cookie) navigate("/home");
    else navigate("/login");
  }, []);
  return (
    <>
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
          <Route path=":projectName/:id/" element={<ContentDetail />} />
        </Route>
      </Routes>
      {isOpenDetailPopup && <AddProjectDetailPopup />}
    </>
  );
}

export default App;
