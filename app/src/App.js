import './App.css';
import {Route, Routes} from "react-router-dom";
import Loyout from "./components/Loyout/Loyout";
import ProductList from "./components/ProductList/ProductList";
import OrderedList from "./components/OrderedList/OrderedList";
import React, {useEffect} from 'react';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Loyout/>}>
                <Route path={'/list'} element={<ProductList/>}/>
              <Route path={'/orderedList'} element={<OrderedList/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
