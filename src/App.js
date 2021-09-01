import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MealsDb from "./views/MealsDB/MealsDB";
import MealDb from "./views/MealDB/MealDB";
import Browse from "./views/Browse/Browse";
import IngridientsMeals from "./views/IngridientsMeals/IngridientsMeals";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path='/'><Home/></Route>
            <Route path='/meals'><MealsDb/></Route>
            <Route path='/mealDB/:meal'><MealDb/></Route>
            <Route path='/browse/:search'><Browse/></Route>
            <Route path='/ingredients/:products'><IngridientsMeals/></Route>
        </Router>
    );
};

export default App;