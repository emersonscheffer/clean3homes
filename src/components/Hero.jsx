import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="hero">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

Premium Home Cleaning

</motion.h1>

<p>Trust • Quality • Care</p>

<a href="#quote" className="cta">
Get Instant Quote
</a>

</section>

)
}