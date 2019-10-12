import  React from 'react';
import style from './Recipe.module.css';

const Recipe= ({title,ingredients,healthLabels,image}) =>{
    return(
        <div className={style.recipe}>
            <h3>{title}</h3>
            <ul ><h5>Ingredients:</h5>
                {ingredients.map(ingredient =>(

                    <li key={title}>{ingredient.text}</li>
                ))}
            </ul>
            <ul> <h5> Health Labels:</h5>
                {healthLabels.map(healthLabel=>(
                    <li key={title}>{healthLabel}</li>
                ))}
            </ul>
            <img src={image} alt="" />
        </div>

    );
};
export default Recipe;