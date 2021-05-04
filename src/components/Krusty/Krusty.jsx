import React from "react";

function Krusty(props) {
  return (
    <div>
      <h1>HP:{props.mcdeez} </h1>
      {/* <img className='Pokemon' src='Krusty_Krab-200 x 100.jpeg' alt="Krusty Krab"></img> */}
      <button onClick={() => {props.mcDeezMinus()}}>Attack Chicken Tendiez!</button>
    </div>
  );
}

export default Krusty;


// when the mcdeez attacks- krusty points drop 
//when krusty attacks- mcdeez points drop 