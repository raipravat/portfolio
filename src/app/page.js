import "./globals.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Scroll2top from "./components/template/Scroll2top.jsx";
import Product from "./components/Project.jsx";
import Link from "./components/Link.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Journey from "./components/Journey.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Scroll2top />
      <Hero />
      <Product />
      <Journey />
      <Link />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
