import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";

const MealsDetails = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        axios(`https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json`)
            .then(res=>setMeal(res.data.find(el=>el.id === params.id)))
    }, [])


    return (
        <div className='meal'>
            <img src={meal.image} alt="" className='img-meal'/>
            <h2>{meal.title}</h2>
            <p>Цена:{meal.price}</p>
            <p>Описание {meal.description}</p>
            <p>В наличии {meal?.inStock?'Есть':'Нету'}</p>
        </div>
    );
};

export default MealsDetails;