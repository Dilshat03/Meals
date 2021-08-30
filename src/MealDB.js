import React, {useEffect, useState} from 'react';
import {useParams, Link,useHistory} from "react-router-dom";
import apple from "./1200px-IPhone_8_vector.svg.png"
import axios from "axios";

const MealDb = () => {
    const history = useHistory()
    const params = useParams()
    const [meal, setMeal] = useState({})
    const [video, setVideo] = useState('')


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`)
            .then(({data}) => {
                const obj = data.meals[0]
                setMeal(obj)
                let str = obj.strYoutube
                setVideo(str.slice(str.indexOf('v=')+2,str.length))
            })
    }, [params.meal])


    const ings = Array(20).fill(0).reduce((acc, el, idx) => {
        if (meal[`strIngredient${idx + 1}`]) {
            return [...acc, meal[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])
    const handleBack = () =>{
        history.goBack()
    }


    return (
        <div className='container'>
            <div>
                <button onClick={handleBack} className='back-btn'>Back</button>
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
                                        <h5>{el}</h5>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>


                <div className="video-iphone">
                    <h3 className='video-title'>Video instructions for cooking <i className="fas fa-arrow-down"></i></h3>
                    <img src={apple} className='iphone-img' alt=""/>
                    <iframe className='video-meal' width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        
                    </iframe>
                </div>
                <h5 className='instructions-meal'>Instructions: <br/>
                    {meal.strInstructions}</h5>
            </div>
        </div>
    );
};

export default MealDb;

