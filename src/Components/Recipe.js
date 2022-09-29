import React from 'react';
 const Recipe = ({title,calories,image,foodContentsLabel}) => {

    // const usingObjectAssign = foodContentsLabel.split(";");
    return(
        <div className="food">
            <h3>{title}</h3>
            {/* <ol>
                {usingObjectAssign.split(";")}
            </ol> */}
            <p>calories : {calories}</p>
            <img src={image} alt={title} />
        </div>
    )
 }

 export default Recipe;