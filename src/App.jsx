import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import { LuAlignVerticalDistributeStart } from "react-icons/lu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="upload" element={<Upload />} />
          </Route>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
