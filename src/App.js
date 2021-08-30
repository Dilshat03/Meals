import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import MealsDb from "./MealsDB";
import MealDb from "./MealDB";
import Browse from "./Browse";
import Ingridients from "./Ingridients";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
        <Router>
            <Header />
          <Route  exact path='/'><MealsDb /></Route>
            <Route  path='/mealDB/:meal'><MealDb /></Route>
            <Route path='/browse/:search'><Browse /></Route>
            <Route path='/ingredients/:products'><Ingridients /></Route>
            <Footer />
        </Router>
    );
};

export default App;