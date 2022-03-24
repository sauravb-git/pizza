import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import Loading from './../../common/Loading'; 
import Error from './../../common/Error';
import { deliverOrder, getAllOrders } from './../../redux/action/oderAction'; 




const OrderLists = () => {
    const dispatch = useDispatch(); 
    const Orderstate = useSelector((state) => state.getAllOrdersReducer);
  
    const { orders, error, loading } = Orderstate;
    console.log(orders)
    useEffect(() => {
      dispatch(getAllOrders());
    }, []); 
    return (
        <div> 
            <h1 className="mb-4">Orders List</h1>
            {loading ?  <Loading /> : error ?  <Error error="Something went wrong" /> : <>
              <table className="table table-striped table-bordered table-responsive-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>Order Id</th>
                    <th>Email</th>
                    <th>User Id</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {orders &&
                    orders.map((order) => {
                      return (
                        <tr>
                          <td>{order._id}</td>
                          <td>{order.email}</td>
                          <td>{order.userid}</td>
                          <td>{order.orderAmount}</td>
                          <td>{order.createdAt.substring(0, 10)}</td>
                          <td>
                            {order.isDelivered ? (
                              <h1>Delivered</h1>
                            ) : (
                              <button className="btn" 
                              onClick={()=>{dispatch(deliverOrder(order._id))}}
                              >Deliver</button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              </>  } 
        </div>
    );
};

export default OrderLists;