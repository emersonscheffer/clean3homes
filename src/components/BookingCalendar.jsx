import Calendar from "react-calendar"
import { useState } from "react"

export default function BookingCalendar(){

const [date,setDate] = useState(new Date())

return(

<section className="booking">

<h2>Schedule Cleaning</h2>

<Calendar onChange={setDate} value={date}/>

<p>Selected date: {date.toDateString()}</p>

<button>Request Booking</button>

</section>

)
}