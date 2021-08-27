import React from 'react';
import {Link} from "react-router-dom"
import {useState,useEffect} from "react";
import axios from "axios";

const AllMeals = () => {
    const [meals,setMeals] = useState([])
    useEffect(()=>{
        axios(`https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json`)
            .then(res=>setMeals(res.data))
    },[])

    return (
        <div className='all-meals'>
            {
                meals.map(el=>
                    <div key={el.id} >
                        <Link to={`/meal/${el.id}`} className='meals-link'>
                            <img src={el.image} alt="" className='img-link'/>
                            <h3>{el.title}</h3>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default AllMeals;