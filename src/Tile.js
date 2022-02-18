import React from "react";

function Tile({title, text, image}){
    return(
        <>
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
                {image && <img src={image} alt={title} />}
            </section>
        </>
    );
}

export default Tile;