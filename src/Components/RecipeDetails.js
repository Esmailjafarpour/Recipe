
import React,{useState} from 'react';

const RecipeDetails = ({foodContentsLabel}) => {

    // const foodContent = foodContentsLabel.split(";")console.log(foodContent)

    return ( 

        <div className="RecipeDetails">
            {foodContentsLabel ? foodContentsLabel : "There is no recipe"}
        </div>

     )

};

export default RecipeDetails;