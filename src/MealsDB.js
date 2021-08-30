import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link,useHistory} from "react-router-dom";

const MealsDb = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()
    const [meals,setMeals] = useState([])

    useEffect(()=>{
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res=>setMeals(res.data.meals))
    },[])

    const searchInput = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        if (search.trim()){
            history.push(`/browse/${search}`)
        }
    }

    return (
        <div className='container'>
            <div className='mealDB'>
                <div className="search">
                    <input type="text" className='search-input' onChange={searchInput}/>
                    <button onClick={handleSearch} className="link-search">SEARCH</button>
                </div>
                <div className="all-meals">
                    {
                        meals.map(el=>
                            <div key={el.idMeal}>
                                <Link to={`/mealDB/${el.strMeal}`}>
                                    <img src={el.strMealThumb} alt="" className='mealDB-img'/>
                                    <p className='meals-name'> {el.strMeal}</p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MealsDb;