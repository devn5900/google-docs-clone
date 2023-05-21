import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Editor from "./pages/Editor";
import Navbar from "./pages/Navbar";
import { v4 } from "uuid";
import View from "./pages/View";
import Icons from "./components/Icons";
import { useSelector } from "react-redux";
function App() {
  const { name } = useSelector((store) => store.editorReducer);
  document.title = name || "Untitled Document";
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Navigate to={`/document/${v4()}`} />} />
            <Route path="/document/:id" element={<Editor />} />
            <Route path="/document/:id/view" element={<View />} />
          </Routes>
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default App;
