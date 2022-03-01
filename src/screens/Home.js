import axios from 'axios';
import React, { useEffect } from 'react';
import Pizza from '../common/Pizza.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../redux/action/pizzaAction';
import { getAllPizzasReducer } from './../redux/reducers/pizzaReducers';

function Home() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, loading, error } = pizzaState;

  useEffect(() => {
      dispatch(getAllPizzas());
  },[]);
  

  return (
    <div>
      <div  className="row justify-content-center" 
       style={{ padding: '0', margin: '0', textAlign: 'center' }}  >
        {loading ? (
          <h1>Loading</h1>
        ) : error ? <h1>Something went Wrong</h1> : (
          pizzas?.map((pizza, i) => {
            return (
              <div className="col-md-4" key={i}>
                <Pizza pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
