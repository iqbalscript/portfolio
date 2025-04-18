import React from "react";
import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./src/components/Resume/Resume";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";  
import Contact from "./components/Contact/Contact";


const App = () => {
    return  (
        <>
        <Sidebar />
        <main className="main">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Resume />
            <Pricing />
            <Testimonials />
            <Blog />
            <Contact />
        </main>
        </>
    );
}

export default App;  