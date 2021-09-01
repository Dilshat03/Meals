import React, {useEffect, useState} from 'react';
import axios from "axios";
import MealsList from "../../components/MealsList/MealsList";
import Search from "../../components/Search/Search";

const MealsDb = () => {
    const [meals,setMeals] = useState([])
    useEffect(async ()=>{
        const {data:{meals}}= await axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            setMeals(meals)
    },[])


    return (
        <div className='container'>
            <div className='mealDB'>
                <Search />
                <MealsList meals={meals} />
            </div>
        </div>
    );
};

export default MealsDb;