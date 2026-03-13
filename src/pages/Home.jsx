import Hero from "../components/Hero";
import BeforeAfter from "../components/BeforeAfter";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import QuoteCalculator from "../components/QuoteCalculator";
import BookingCalendar from "../components/BookingCalendar";
import ContactForm from "../components/ContactForm";
import AboutUs from "../components/AboutUs";
import AfterQuote from "../components/AfterQuote";
import ContactUs from "../components/ContactUs";

export default function Home() {

  return (

    <div>

      <Hero />

      <BeforeAfter />

      <Services />

      <Reviews />

      <AboutUs />

      <QuoteCalculator />

      <AfterQuote />

      <BookingCalendar />

      {/* <ContactForm /> */}

      <ContactUs />

    </div>

  );
}