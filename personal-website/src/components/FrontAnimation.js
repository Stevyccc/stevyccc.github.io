import React, { useState } from "react";
import '../FrontAnimation.css';

function FrontAnimation() {
    const [selectedCard, setSelectedCard] = useState("c1");
    const slides = [
        {
            id: "c1",
            heading: "Cracking the Code",
            description: "Finding the signals buried in the noise — one algorithm at a time.",
        },
        {
            id: "c2",
            heading: "Tech Meets Creativity",
            description: "Curiosity meets computation in the search for hidden trends.",
        },
        {
            id: "c3",
            heading: "Where Numbers Come Alive",
            description: "Exploring how math and data shape the real world in unexpected ways.",
        },
        {
            id: "c4",
            heading: "Shaping Tomorrow",
            description: "Charting the course toward a future driven by curiosity and passion.",
        },
    ];

    return (
        <div className="wrapper">
            <div className="container">
                {slides.map((slide) => (
                <React.Fragment key={slide.id}>
                    <input 
                        type="radio" 
                        name="slide" 
                        id={slide.id} 
                        checked={selectedCard === slide.id} 
                        onChange={() => setSelectedCard(slide.id)} 
                    />
                    <label 
                        htmlFor={slide.id} 
                        className="card" 
                        style={{ backgroundImage: `url(/${slide.id}.jpg)` }}>
                        <div className="row">
                            <div className="icon">{slides.indexOf(slide) + 1}</div>
                            <div className="description">
                            <h4>{slide.heading}</h4>
                            <p>{slide.description}</p>
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
