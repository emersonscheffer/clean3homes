import { FaBroom } from "react-icons/fa"

export default function Navbar(){
return(

<header className="navbar">

<div className="logo">
<FaBroom/> Clean3Houses
</div>

<nav>
<a href="#services">Services</a>
<a href="#quote">Quote</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</nav>

</header>

)
}