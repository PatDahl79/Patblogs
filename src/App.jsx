import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";
import Nopage from "./pages/Nopage";
import { BiLogIn } from "react-icons/bi";
import Dashboard from "./pages/Dashboard";
import MyState from "./context/myState";
import SignUp from "./pages/Signup";
import { useState } from "react";
import Login from "./pages/Login";
import { MyContextProvider } from "./context/myContext";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <MyContextProvider>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BiLogIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/:userId" element={<Dashboard />} />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <Toaster/>
        </Router>
      </MyState>
    </MyContextProvider>
  )
}

export default App