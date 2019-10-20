import  React from 'react';


import style from './Recipe.module.css';

const Recipe= (props) =>{
    return(
        <div className={style.recipe}>
            <h3>{props.title}</h3>
            <ul ><h5>Ingredients:</h5>
                {props.ingredients.map(ingredient =>(

                    <li >{ingredient.text}</li>
                ))}
            </ul>
            <ul> <h5> Health Labels:</h5>
                {props.healthLabels.map(healthLabel=>(
                    <li >{healthLabel}</li>
                ))}
            </ul>
            <img src={props.image} alt="" />
        </div>

    );
};
export default Recipe;