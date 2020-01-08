import React, { useEffect, useState } from 'react';

import Recipe from './Recipe.js';

function SearchCall() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');
    useEffect(() => {
        getRecipes();
    }, [query]);
    const updateSearch = e => {
        setSearch(e.target.value)
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };
    const getRecipes = async () => {
        var url ='https://api.edamam.com/search?q='+query+'&app_id='+process.env.REACT_APP_APP_ID+
        '&app_key='+process.env.REACT_APP_API_KEY;
    
        const response = await fetch('https://cors-anywhere.herokuapp.com/'+url);    //CORS problem with fetch call
                                                                    // using `https://cors-anywhere.herokuapp.com/` as third party
        const data = await response.json();
        setRecipes(data.hits);
    };

    return (
        <div>
            <form className="form" onSubmit={getSearch}>
                <input type="text" className="textBox" value={search} onChange={updateSearch} />
                <button type="submit" className="searchButton">Search</button>
            </form>
            {recipes.map(recipe =>(
                <Recipe
                    title={recipe.recipe.label}
                    ingredients={recipe.recipe.ingredients}
                    healthLabels={recipe.recipe.healthLabels}
                    image={recipe.recipe.image}
                />
            ))}
        </div>
    );
  };
export default SearchCall;