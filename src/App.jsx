import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Highlights />
        <Testimonials />
        <Footer />
        <FloatingWhatsAppButton />
      </main>
    </>
  );
}

export default App;
