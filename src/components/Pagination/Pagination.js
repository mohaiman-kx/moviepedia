import React from 'react';

const pagination = ({setPageNumber}) => {
    let next = () => {
        setPageNumber(x =>  x+1);
    };

    let prev = () => {
        setPageNumber(x =>  x-1);
    };

    return (
        <div className='container d-flex justify-content-center gap-5 my-5'>
            <button onClick={prev} className="btn btn-custom">Prev</button>
            <button onClick={next} className="btn btn-custom">Next</button>
        </div>
    )
}

export default pagination
