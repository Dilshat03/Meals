import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import MealsDb from "./MealsDB";
import MealDb from "./MealDB";
import Browse from "./Browse";

const App = () => {
    return (
        <Router>
          {/*<Route exact path='/'><AllMeals /></Route>*/}
          {/*<Route  path='/meal/:id'><MealsDetails /></Route>*/}
          <Route  exact path='/'><MealsDb /></Route>
            <Route path='/browse/:search'><Browse /></Route>
            <Route  path='/mealDB/:id'><MealDb /></Route>
        </Router>
    );
};

export default App;