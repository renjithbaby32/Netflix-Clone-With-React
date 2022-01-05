import React, { useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';


function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [UrlId, setUrlId] = useState('')
    const opts = {
        height: '700',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        })
    }, []);
    const handleMovie = (id) => {
        console.log(id);
        axios.get(
            `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
                console.log(response.data);
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0])
                }
            })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((element) =>
                    <img onClick={() => {
                        handleMovie(element.id)
                    }} className={props.isOriginals ? 'poster' : 'poster-small'} src={`${imageUrl + element.backdrop_path} `} alt="" />
                )}
            </div>
            { UrlId && <YouTube videoId={UrlId.key} opts={opts} /> }
        </div>
    )
}

export default RowPost
