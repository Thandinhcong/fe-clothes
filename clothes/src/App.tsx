import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutClient from "./layout/Client";
import LayoutAdmin from "./layout/Admin";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
