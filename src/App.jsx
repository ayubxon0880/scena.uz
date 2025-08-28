import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import UsePageTracking from "./components/Tracking.jsx";

export default function App() {

    return (
        <Router>
            <Navbar/>
            <div className="pt-16">
                <UsePageTracking/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
}
