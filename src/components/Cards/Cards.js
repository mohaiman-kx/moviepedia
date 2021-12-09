import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Cards = ({results}) => {
    
    let display;

    console.log(results)

    if(results){
        display = results.map(x=>{
            let {id , title, vote_average ,poster_path} = x ;
            return(
                <div key={id} className='col-3 mb-4'>
                    <div className='movie-card-area'>
                        <div className="movie-card-area__image">
                            <LazyLoadImage effect="blur" src={IMG_API + poster_path} alt={title} className='img-fluid'/>
                        </div>
                        <div className='movie-card-area__context'>
                            <div className='title'>
                             <p>{title}</p>
                            </div>
                            <div className='rate'>
                              <p>Rate : <span>{vote_average}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }else{
        display = "No movie Found :/";
    }
    return (
        <>
            {display}
        </>
    )
}

export default Cards
