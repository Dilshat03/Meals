import React, {useState} from 'react';
import {useParams, Link,useHistory} from "react-router-dom";
import axios from "axios";

const Browse = () => {
    const params = useParams()
    const history = useHistory()
    const [searchMeal, setSearchMeal] = useState([])
    const [error, setError] = useState()

    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
        .then(({data}) => {
          if (data.meals){
              setSearchMeal(data.meals)
          } else {
              setError('Dish not found')
          }
        })
    const handleBack = () =>{
        history.goBack()
    }



    return (
        <div className="grid">
            <button onClick={handleBack} className='back-btn'>Back</button>
            {
                searchMeal.map(item =>
                    <div>
                        <Link to={`/meals/${item.strMeal}`}>
                            <img src={item.strMealThumb} alt=""/>
                            <p>{item.strMeal}</p>
                        </Link>
                    </div>
                )
            }
            <div>{error}</div>
        </div>
    );
};

export default Browse