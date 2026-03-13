import { useState } from "react"

export default function QuoteCalculator(){

const [bedrooms,setBedrooms]=useState(1)
const [bathrooms,setBathrooms]=useState(1)
const [pets,setPets]=useState(false)
const [type,setType]=useState("regular")
const [frequency,setFrequency]=useState("once")

function calculate(){

let price = 120 + ((bedrooms-1)+(bathrooms-1))*20

if(pets) price += 20
if(type==="deep") price+=60
if(type==="move") price+=80

if(frequency==="monthly") price*=0.95
if(frequency==="biweekly") price*=0.9
if(frequency==="weekly") price*=0.85

return Math.round(price)

}

return(

<section id="quote">

<h2>Instant Quote</h2>

<div className="quoteBox">

<select onChange={e=>setBedrooms(e.target.value)}>
{[1,2,3,4,5,6,7].map(n=><option key={n}>{n}</option>)}
</select>

<select onChange={e=>setBathrooms(e.target.value)}>
{[1,2,3,4,5,6,7].map(n=><option key={n}>{n}</option>)}
</select>

<label>
<input type="checkbox" onChange={e=>setPets(e.target.checked)}/>
Pets
</label>

<select onChange={e=>setType(e.target.value)}>
<option value="regular">Regular</option>
<option value="deep">Deep Cleaning</option>
<option value="move">Move Out</option>
</select>

<select onChange={e=>setFrequency(e.target.value)}>
<option value="once">One Time</option>
<option value="monthly">Monthly</option>
<option value="biweekly">Biweekly</option>
<option value="weekly">Weekly</option>
</select>

<h3>${calculate()}</h3>

</div>

</section>

)
}