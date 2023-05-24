import React, { useState } from "react";
import { CarouseItem } from "./CarouseItem";
 

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const items = [
        {
            description: 'Hannover is a very beatifull place to vissit. Located in the northern pasr of Germany it is not very far from Berlin and Hamburg just to name a few',
            imgUrl: require("./images/HannoverPlatz.jpg")
        },
        {
            description: 'Hannover is a very beatifull place to vissit. Located in the northern pasr of Germany it is not very far from Berlin and Hamburg just to name a few',
            imgUrl: require("./images/new-town-halls-tower.jpg")
        },
        {
            description: 'Hannover is a very beatifull place to vissit. Located in the northern pasr of Germany it is not very far from Berlin and Hamburg just to name a few',
            imgUrl: require("./images/hannover-zoo.jpg")
        },

    ];

    const updateIndex = (newIndex) => {
        if(newIndex < 0) {
            newIndex = 0
        } else if(newIndex >= items.length) {
            newIndex = items.length -1
        }

        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div className="inner"
            style={{transform: `translate(-${activeIndex * 100}%)` }}>
                {items.map((item) => {
                    return <CarouseItem item={item}/>
                })}
            </div>

            <div>
                <button onClick={() => {
                    updateIndex(activeIndex -1)}} 
                    className="carousel-button1">
                <span class="material-symbols-outlined">arrow_back_ios</span>
                </button>
                
                <button onClick={() => {
                    updateIndex(activeIndex + 1)}}
                    className="carousel-button2">

                <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>    
        </div>
    )
}