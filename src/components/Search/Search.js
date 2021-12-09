import React from 'react'

const Search = () => {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input type="text" className='' placeholder='Search for movie' />
            <button className='btn btn-custom'>Search</button>
        </form>
    )
}

export default Search
