import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import FloatingQuoteButton from "./components/FloatingQuoteButton";
import FloatingQuoteWidget from "./components/FloatingQuoteWidget";

export default function App() {

  return (
    <div>

      <Navbar />

      <Home />

      <FloatingQuoteWidget />

      <Footer />

    </div>
  );
}