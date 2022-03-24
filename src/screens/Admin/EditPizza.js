import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from './../../common/Loading'; 
import Error from './../../common/Error'; 
import Success from './../../common/Success';
import { addPizza, editPizza, getPizzaById } from "../../redux/action/pizzaAction";

const EditPizza = ({ match }) => {
    const pizzaid = match.params.pizzaid;
     const dispatch = useDispatch();

     const addpizzastate = useSelector((state)=>state.getPizzaByIdReducer)
    const { pizza} = addpizzastate 
    
    const editpizzastate = useSelector((state) => state.editPizzaReducer)
    const {editloading , editerror , editsuccess} = editpizzastate;

    const [name, setname] = useState();
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState();
    const [description, setdescription] = useState();
    const [category, setcategory] = useState();

     
    useEffect(() => {  
        if(pizza)
        {
            if(pizza[0]?._id=== pizzaid)
            {
                setname(pizza[0]?.name)
                setdescription(pizza[0]?.description)
                setcategory(pizza[0]?.category)
                setsmallprice(pizza[0]?.prices[0]['small'])
                setmediumprice(pizza[0]?.prices[0]['medium'])
                setlargeprice(pizza[0]?.prices[0]['large'])
                setimage(pizza[0]?.image)
            }
            else{
                dispatch(getPizzaById(pizzaid));
            } 
        }
        else{
            dispatch(getPizzaById(pizzaid));
        }
      }, [pizza,dispatch]);
   
      
      
     
    
    function formHandler(e){ 
        e.preventDefault(); 
        const editedpizza = {
            _id : pizzaid,
            name ,
            image,
            description,
            category,
            prices:{
                small : smallprice,
                medium : mediumprice,
                large : largeprice
            }
        }
        dispatch(editPizza(editedpizza))  
      }
    return (
        <div>

    <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
           

          <h1 className="mb-4">Update Pizza</h1>
          { editsuccess && <Success success="New Pizza Add Success"  />}
      {editloading ?  <Loading /> : editerror ?  <Error error="Something went wrong" /> :  
             <>  
            <form onSubmit={formHandler}>
            <input
                className="form-control"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => {
                setname(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="small varient price"
                value={smallprice}
                onChange={(e) => {
                setsmallprice(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="medium varient price"
                value={mediumprice}
                onChange={(e) => {
                setmediumprice(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="large varient price"
                value={largeprice}
                onChange={(e) => {
                setlargeprice(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => {
                setcategory(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => {
                setdescription(e.target.value);
                }}
            />
            <input
                className="form-control"
                type="text"
                placeholder="image url"
                value={image}
                onChange={(e) => {
                setimage(e.target.value);
                }}
            />
            <button className='btn mt-3' type='submit'>Edit Pizza</button>
            </form>
            </>
            }
            
          </div> 
        </div>
    );
};

export default EditPizza;