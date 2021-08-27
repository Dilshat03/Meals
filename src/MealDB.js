import React, {useEffect, useState} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";

const MealDb = () => {
    const params = useParams()
    const [meal,setMeal] = useState({})
    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php?i=${params.idMeal}`)
            .then(res=>setMeal(res.data.meals[0]))
    },[params.idMeal])
    const ings = Array(20).fill(0).reduce((acc,el,idx) =>{
        if (meal[`strIngredient${idx+1}`]){
            return [...acc,meal[`strIngredient${idx+1}`]]
        }
        return acc
    },[])
    return (
        <div>
            <Link to='/'><i className='bx bx-arrow-back'></i></Link>
            <img src={meal.strMealThumb} alt="" className='mealDB-img'/>
            <h5>{meal.strMeal}</h5>
            <h5>{meal.strCategory}</h5>
            <h5>{meal.strArea}</h5>
            <h5>Instructions {meal.strInstructions}</h5>
            <h5>{meal.strTags}</h5>
           <div className='ings'>
               {
                   ings.map(el=>
                       <div>
                           <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt="" className='ing-img'/>
                           <h5>{el}</h5>
                       </div>
                   )
               }
           </div>
        </div>
    );
};

export default MealDb;