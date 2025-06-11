import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import diet from "../assets/diet.svg";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state: {recipe} } = useLocation();
  const { darkMode } = useContext(RecipeContext);
  console.log(recipe);
  const ingredients=[]
  for (let i=1; i<=20; i++){
    const measure=recipe[`strMeasure${i}`]
    const ingredients=recipe[`strIngredient${i}`]
    if(ingredients && ingredients.trim !==""){
      ingredients.push({measure,ingredients})
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode} ? bg-gray-800 : bg-gray-100`}>
        <header className="flex justify-between items-center">
          <h1 className="text-3xl">{recipe.strMeal}</h1>
          <img src="{diet}" alt="" className="w-20 h-20 cursor-pointer mr-6" />
        </header>
        <div className="flex items-center flex-col md:flex-row">
          <section className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl space-y-3 shadow-lg">
            <h2>Ingredients</h2>
            {
              ingredients.map((ing)=>(
                <p>
                <span className="font-medium">{ing.measure}</span>
                <span> {ing.ingredients}</span>
                </p>

              ))
            }
          </section>
          <section className="flex-1 m-3">
            <img src={recipe.strMealThumb} alt="" className="rounded-2xl-w-full max-h-80 object-fit" />
          </section>
          <section className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-2xl space-y-3 shadow-lg">
          <h2 className="">Information</h2>
          <p>id:{recipe.idMeal}</p>
          <p>id:{recipe.strArea}</p>
          <p>id:{recipe.strInstructions}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
