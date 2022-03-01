import axios from 'axios';
import React, { useEffect } from 'react';
import Pizza from '../common/Pizza.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../redux/action/pizzaAction';
import { getAllPizzasReducer } from './../redux/reducers/pizzaReducers';
import Loading from '../common/Loading.js';
import Error from '../common/Error.js';

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
          <Loading />
        ) : error ? <Error error={'Something went Wrong'} /> : (
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
