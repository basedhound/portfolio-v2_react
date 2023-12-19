import { useState, useEffect, createContext } from "react";
// ==============================
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./styles.css";
// ==============================

export const ThemeContext = createContext();

const App = () => {
  // Theme switch
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };
  // id or classlist(add/remove) are both valid methods
  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
