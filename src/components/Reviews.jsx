export default function Reviews(){

const reviews = [
{
name:"Sarah M",
text:"Clean3Houses did an amazing job. My house has never looked this clean. Very professional and reliable!"
},
{
name:"David R",
text:"Great service and very friendly staff. They always arrive on time and the results are excellent."
},
{
name:"Jessica L",
text:"Perfect cleaning service for my Airbnb. My guests always comment on how spotless the house is."
}
]

return(

<section id="reviews">

<h2 style={{textAlign:"center", marginBottom:"40px"}}>
Client Reviews
</h2>

<div className="reviewsGrid">

{reviews.map((review,index)=>(

<div className="reviewCard" key={index}>

<div className="stars">★★★★★</div>

<p className="reviewText">
{review.text}
</p>

<div className="reviewName">
— {review.name}
</div>

</div>

))}

</div>

</section>

)
}