import React from 'react';
import {useParams,Link,useHistory} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

const Ingridients = () => {
    const params = useParams()
    const history = useHistory()
    const [product, setProduct] = useState([])

    useEffect(() =>{
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.products}`)
            .then(({data}) => setProduct(data.meals))
    },[params.products])
    const handleBack = () =>{
        history.goBack()
    }

    return (
        <div>
            <button onClick={handleBack} className='back-btn'>Back</button>
            <div className='params-products'>
                <img className='params-products-img' src={`https://www.themealdb.com/images/ingredients/${params.products}.png`} alt=""/>
                <h4 className='params-products-title'>{params.products}</h4>
            </div>
                <div className='el'>
                    {
                        product.map(el =>
                            <div key={el.idMeal}>
                                <Link to={`/mealDB/${el.strMeal}`}>
                                    <img className='el-img' src={el.strMealThumb} alt=""/>
                                    <h2>{el.strMeal}</h2>
                                </Link>
                            </div>
                        )
                    }
                </div>

        </div>
    );
};

export default Ingridients;
