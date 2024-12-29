import React from "react";
 function Card(props){
    console.log("props",props);
    return(
        <div class="card">
  <img src="https://via.placeholder.com/300" alt="Card Image" class="card-img"/>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p class="card-text">This is a brief description of the card content. It can include text about the card's content.</p>
    <button class="card-btn">Learn More</button>
  </div>
</div>

    )
 }
 export default Card