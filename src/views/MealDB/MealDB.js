import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import apple from "../../images/6497ac9fffbb4a4aba6269f49b136912.png"
import axios from "axios";
import Youtube from "../../components/Youtube/Youtube";
import BackBtn from "../../components/BackBTN/BackBtn";

const MealDb = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})
    const [video, setVideo] = useState('')


    useEffect(async () => {
        const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`)
        const obj = data.meals[0]
        setMeal(obj)
        let str = obj.strYoutube
        setVideo(str.slice(str.indexOf('v=') + 2, str.length))

    }, [params.meal])


    const ings = Array(20).fill(0).reduce((acc, el, idx) => {
        if (meal[`strIngredient${idx + 1}`]) {
            return [...acc, meal[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])


    return (
        <div className='container'>
            <div>
                <BackBtn/>
                <div className='ings_meal'>
                    <div className='str-meals'>
                        <h5 className='str-meal'>Dish names :{meal.strMeal}</h5>
                        <h5 className='str-meal'>Dish category :{meal.strCategory}</h5>
                        <h5 className='str-meal'>Origin of the dish :{meal.strArea}</h5>
                        <h5 className='str-meal'>Different names of dishes :{meal.strTags}</h5>
                    </div>
                    <img src={meal.strMealThumb} alt="" className='one-img'/>
                    <div className='ings ings-all'>
                        {
                            ings.map(el =>
                                <div key={el.idMeal}>
                                    <Link to={`/ingredients/${el}`}>
                                        <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt=""
                                             className='ing-img'/>
                                        <h5 className='meal-title'>{el}</h5>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="video-iphone">
                    <h3 className='video-title'>Video instructions for cooking <i className="fas fa-arrow-down"></i>
                    </h3>
                    <img src={apple} className='iphone-img' alt=""/>
                    <Youtube video={video}/>
                </div>
                <h5 className='instructions-meal'>Instructions: <br/>
                    {meal.strInstructions}
                </h5>
            </div>
        </div>
    );
};

export default MealDb;

