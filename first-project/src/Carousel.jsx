import React from "react";
import { CarouseItem } from "./CarouseItem";

export const Carousel = () => {
    const items = [
        {
            description: 'Hannover',
            imgUrl: require("./images/HannoverPlatz.jpg")
        },
        {
            description: 'Hannover',
            imgUrl: require("./images/new-town-halls-tower.jpg")
        },
        {
            description: 'Hannover',
            imgUrl: require("./images/hannover-zoo.jpg")
        },

    ];

    return (
        <div className="carousel">
            <div>
                {items.map((item) => {
                    return <CarouseItem item={item}/>
                })}
            </div>
        </div>
    )
}