import React, { useState } from "react";
import '../FrontAnimation.css';

function FrontAnimation() {
   const [selectedCard, setSelectedCard] = useState("c1");

   return (
      <div className="wrapper">
         <div className="container">
            {["c1", "c2", "c3", "c4"].map((id, index) => (
               <React.Fragment key={id}>
                  <input 
                     type="radio" 
                     name="slide" 
                     id={id} 
                     checked={selectedCard === id} 
                     onChange={() => setSelectedCard(id)} 
                  />
                  <label 
                     htmlFor={id} 
                     className="card" 
                     style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/ins_icon.jpeg'})` }}>
                     <div className="row">
                        <div className="icon">{index + 1}</div>
                        <div className="description">
                           <h4>{index === 1 ? 'Digital' : 'Winter'}</h4>
                           <p>Winter has so much to offer - creative activities</p>
                        </div>
                     </div>
                  </label>
               </React.Fragment>
            ))}
         </div>
      </div>
   );
}

export default FrontAnimation;
