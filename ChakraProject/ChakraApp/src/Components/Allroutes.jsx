import Home from "../pages/Home";
import User from "../pages/User";
import Msg from "../pages/Msg";
import { Routes, Route } from "react-router-dom";

export default function Allroutes() {
  return (
    <> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/msg" element={<Msg />} />
    </Routes>
    </>
  )
}
