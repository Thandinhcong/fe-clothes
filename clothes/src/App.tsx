import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutClient from "./layout/Client";
import LayoutAdmin from "./layout/Admin";
import Home from "./pages/HomePage/Home";
import About from "./pages/HomePage/About";
import Contact from "./pages/HomePage/Contact";
import Detail from "./pages/HomePage/Detail";
import Cart from "./pages/HomePage/Cart";
import CheckOut from "./pages/HomePage/Checkout";
import Register from "./layout/Auths/Register";
import Login from "./layout/Auths/Login";
import ForgotPassword from "./layout/Auths/ForgotPassword";
import FilterProduct from "./pages/HomePage/FilterProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='detail' element={<Detail/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<CheckOut/>}/>
          <Route path='filter-products' element={<FilterProduct/>}/>
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset-password' element={<ForgotPassword/>}/> 
        <Route path="/admin" element={<LayoutAdmin />}>
        <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
