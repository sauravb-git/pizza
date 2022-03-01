import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction } from '../redux/action/cartAction';


const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarients] = useState('small');
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const dispatch = useDispatch();
  const addtocart = () => {
    dispatch(AddToCartAction(pizza,quantity,varient))
  }
  
  return (
    <div style={{ margin: '70px' }} className="shadow p-3 mb-5 bg-body rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt="" className="img-fluid food__image" />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarients(e.target.value);
            }}
          >
            {pizza.varients.map((varient, i) => {
              return (
                <option key={i} value={varient}>
                  {varient}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option key={i} value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: {pizza.prices[0][varient] * quantity} BD/-
          </h1>
        </div>

        <div className="m-1 w-100">
          <button onClick={addtocart} className="btn btn-danger">Add To Cart</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={pizza.image} alt="" className="img-fluid" style={{height:'400px'}} />
        <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
