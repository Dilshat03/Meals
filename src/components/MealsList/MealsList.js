import {Link} from "react-router-dom";
import React from "react";

const MealsList = ({meals}) => {
    return (
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
    );
};

export default MealsList;