import React, { useState } from "react";
import '../FrontAnimation.css';

function FrontAnimation() {
    const [selectedCard, setSelectedCard] = useState("c1");
    const slides = [
        {
            id: "c1",
            heading: "Winter Wonderland",
            description: "Winter has as much to offer",
        },
        {
            id: "c2",
            heading: "Winter Wonderland",
            description: "Winter has as much to offer",
        },
        {
            id: "c3",
            heading: "Winter Wonderland",
            description: "Winter has as much to offer",
        },
        {
            id: "c4",
            heading: "Winter Wonderland",
            description: "Winter has as much to offer",
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
