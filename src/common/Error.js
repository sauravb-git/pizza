import React from 'react';

const Error = ({error}) => {
    return (
        <div >
            <div className="alert alert-danger  " 
            style={{textAlign:'center',display:'inline'}}  role="alert">
                {error}
            </div>
        </div>
    );
};

export default Error;