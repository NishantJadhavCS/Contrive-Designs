import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import ScrollingBrands from "./components/ScrollingBrands";
import Flow from "./components/Flow";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Highlights />
        <Testimonials />
        <ScrollingBrands />
        <Flow />
        <Footer />
        <FloatingWhatsAppButton />
      </main>
    </>
  );
}

export default App;
