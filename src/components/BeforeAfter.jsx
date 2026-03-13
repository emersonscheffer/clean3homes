import { useState } from "react"

export default function BeforeAfter(){

const [pos,setPos] = useState(50)

return(

<section className="beforeAfter">

<h2>Before & After</h2>

<div className="slider">

<img src="/after2.jpg"/>

<div
className="before"
style={{width:`${pos}%`}}
>

<img src="/before2.jpg"/>

</div>

<input
type="range"
min="0"
max="100"
value={pos}
onChange={(e)=>setPos(e.target.value)}
className="range"
/>

</div>

</section>

)
}