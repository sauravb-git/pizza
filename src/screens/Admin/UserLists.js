import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import Loading from './../../common/Loading'; 
import Error from './../../common/Error';
import { getAllUsers,deleteUser } from "../../redux/action/userAction";

const UserLists = () => {


    const dispatch = useDispatch()
  const usersstate = useSelector(state=>state.getAllUsersReducer)
  const {error , loading , users} = usersstate
    useEffect(() => { 
        dispatch(getAllUsers())
        
    }, [])
     
    return (
        <div> 
            <h1 className="mb-4">Users list</h1>
            {loading ?  <Loading /> : error ?  <Error error="Something went wrong" /> : <> 
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                        </tr>
                    })}
                </tbody> 
            </table> 
            </>} 
            
        </div>
    );
};

export default UserLists;