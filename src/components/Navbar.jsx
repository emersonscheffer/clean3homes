import { FaBroom } from "react-icons/fa"

export default function Navbar(){
return(

<header className="navbar">

<div className="logo">
<img width={"120px"} src="/logo2.png" alt="Clean3Homes Logo" /> Clean3Homes
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