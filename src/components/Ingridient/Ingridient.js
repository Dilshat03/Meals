import React from 'react';
import {Link} from "react-router-dom";

const Ingridient = ({product}) => {
    return (
        <div className='el'>
            {
                product.map(el =>
                    <div key={el.idMeal}>
                        <Link to={`/mealDB/${el.strMeal}`}>
                            <img className='el-img' src={el.strMealThumb} alt=""/>
                            <h2 className='el-title'> {el.strMeal}</h2>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Ingridient;