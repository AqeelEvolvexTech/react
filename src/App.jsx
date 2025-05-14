import { BrowserRouter, Route, Routes } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Blog from "./pages/blogs/Blog";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
   return (
      <BrowserRouter>
         <AppLayout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/blogs" element={<Blogs />} />
               <Route path="/blogs/:id" element={<Blog />} />
               <Route
                  path="/dashboard"
                  element={
                     <ProtectedRoute>
                        <Dashboard />
                     </ProtectedRoute>
                  }
               />
               <Route path="/login" element={<Login />} />
            </Routes>
         </AppLayout>
      </BrowserRouter>
   );
}

export default App;
