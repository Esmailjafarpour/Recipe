import React,{useState} from 'react';

const Recipe = ({title,calories,image}) => {

    const [recipes,setRecipes] = useState([]);

    return(
        <div className="food">
            <h3>{title}</h3>
            <p>calories : {calories}</p>
            <img src={image} alt={title} />
        </div>
    )
 }

 export default Recipe;