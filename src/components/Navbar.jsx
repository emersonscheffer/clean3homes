import { useState } from "react";

export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)

return (
<header className="navbar">

{/* LOGO */}
<div className="logoContainer">
  <img src="/logo3.png" alt="Clean3Homes Logo" />
  <div className="logoText">
    <span className="brandName">Clean3Homes</span>
    <a href="tel:+15108153754" className="phone">
      510 815 3754
    </a>
  </div>
</div>

{/* DESKTOP NAV */}
<nav className="navLinks">
  <a href="#services">Services</a>
  <a href="#quote">Quote</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

{/* EMAIL */}
<a href="mailto:clean3homes@gmail.com" className="email">
  clean3homes@gmail.com
</a>

{/* MOBILE MENU BUTTON */}
<div className="hamburger" onClick={() => setMenuOpen(true)}>
  ☰
</div>

{/* MOBILE MENU */}
<div className={`mobileMenu ${menuOpen ? "show" : ""}`}>

  <div className="closeBtn" onClick={() => setMenuOpen(false)}>✕</div>

  <div className="mobileHeader">
    <img src="/logo3.png" alt="logo" />
    <h2>Clean 3 Homes</h2>
    <a href="tel:+15108153754">510 815 3754</a>
  </div>

  <nav className="mobileLinks">
    <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
    <a href="#quote" onClick={()=>setMenuOpen(false)}>Quote</a>
    <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
    <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
    <a href="mailto:clean3homes@gmail.com">Email Us</a>
  </nav>

</div>

</header>
)
}