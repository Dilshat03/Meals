import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import BackBtn from "../../components/BackBTN/BackBtn";
import Ingridient from "../../components/Ingridient/Ingridient";

const IngridientsMeals = () => {
    const params = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.products}`)
                .then(({data}) => setProduct(data.meals))
        }
        fetchData()
    }, [params.products])


    return (
        <div className='container'>
            <BackBtn />
                <div className='params-products'>
                    <img className='params-products-img'
                         src={`https://www.themealdb.com/images/ingredients/${params.products}.png`} alt=""/>
                    <h4 className='params-products-title'>{params.products}</h4>
                </div>
                <Ingridient product={product}/>

        </div>
);
};

export default IngridientsMeals;
