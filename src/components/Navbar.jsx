// import { FaBroom } from "react-icons/fa"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img width={"110px"} src="/logo3.png" alt="Clean3Homes Logo" />{" "}
        Clean3Homes <span style={{"color":"#13b829"}}>510 815 3754</span>
      </div>

      <nav>
        <a href="#services">Services</a>
        <a href="#quote">Quote</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
