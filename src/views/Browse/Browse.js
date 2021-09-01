import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import BackBtn from "../../components/BackBTN/BackBtn";

const Browse = () => {
    const params = useParams()
    const [searchMeal, setSearchMeal] = useState([])
    const [error, setError] = useState()

    useEffect( ()=>{
        const fetchData = async () =>{
            const {data} = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
            if (data.meals){
                setSearchMeal(data.meals)
            } else {
                setError('Мындай тамак жок!')
            }
        }
        fetchData()
    },[])




return (
    <div className='container'>
        <BackBtn/>
        <div className="el">
            {
                searchMeal.map(item =>
                    <div key={item.idMeal}>
                        <Link to={`/mealDB/${item.strMeal}`}>
                            <img className='el-img' src={item.strMealThumb} alt=""/>
                            <p>{item.strMeal}</p>
                        </Link>
                    </div>
                )
            }
        </div>
        <div className='error'>{error}</div>
    </div>
);
}
;

export default Browse