import React from "react";

function Mcdeez(props) {
  return (
    <div>
     <h1>HP: {props.krusty} </h1>
     {/* <img className='Pokemon' src='mcdonalds-200 x 200.jpeg' alt="McDeez"></img> */}
     <button onClick={() => {props.krustyMinus()}}>Attack Krabby Patties!!</button>
    </div>
  );
}

export default Mcdeez;