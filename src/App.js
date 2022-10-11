import React , {useEffect,useState} from "react";
import axios from 'axios';
import './App.css';

import Recipe from './Components/Recipe';
import RecipeDetails from './Components/RecipeDetails'

function App() {
  // https://developer.edamam.com/admin/applications
  // https://developer.edamam.com/food-database-api-docs
  const APP_ID = "5c055362";
  const APP_KEY = "e80283c7fa939e5a4c278b5083147f46";
  // const exampleRequest= `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=shout`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    getRecipes()
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${query}&nutrition-type=cooking`);
    const data =  await response.json();
    setRecipes(data.hints);
    console.log("recipe",recipes)

  }

  const updateSearch = (e) => {

      setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    if(!search){
      return
    }
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">

      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Submit</button>
      </form>

      <main className="main">

        {recipes.map((recipe,index) => (
          
          <div className="content" key={index}>

            <Recipe
              title={recipe.food.label}
              calories={recipe.food.nutrients.ENERC_KCAL}
              image={recipe.food.image}
            />

            <RecipeDetails
                foodContentsLabel={recipe.food.foodContentsLabel}
            />

          </div>
          
        ))

        }

      </main>
      
    </div>

  );
}

export default App;
