import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const MealsDb = () => {
    const [meals,setMeals] = useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res=>setMeals(res.data.meals))
    },[])
    const searchInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='mealDB'>
            <div className="search">
                <input type="text" onChange={searchInput}/>
                <Link className="link" to={`browse/${search}`}>SEARCH</Link>

            </div>
            {
                meals.map(el=>
                    <div key={el.idMeal}>
                        <Link to={`/mealDB/${el.idMeal}`}>
                            <img src={el.strMealThumb} alt="" className='mealDB-img'/>
                            <p>{el.strMeal}</p>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default MealsDb;