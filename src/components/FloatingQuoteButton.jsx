export default function FloatingQuoteButton(){

const scrollToQuote = () => {
const section = document.getElementById("quote")
if(section){
section.scrollIntoView({ behavior: "smooth" })
}
}

return(

<button className="floatingQuote" onClick={scrollToQuote}>
💬 Get Quote
</button>

)
}