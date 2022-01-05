import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../axios';
import { API_KEY, imageUrl } from '../constants/constants';

function Banner() {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            let choice = Math.floor((Math.random() * 19) + 0);
            setMovie(response.data.results[choice])
            console.log(response.data.results[choice]);
        })
    }, [])
    return (
        <div style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie.title || movie.name}</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
