import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutClient from "./layout/Client";
import LayoutAdmin from "./layout/Admin";
import Product from "./pages/HomePage/Product";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Product />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
