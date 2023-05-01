import React, { useState, useEffect } from "react";
import {getCast} from  "../services/search"
import { useParams } from "react-router-dom";


const Cast = () => {
    const [castValue, setCastValue] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        if   (castValue === null) {
            getCast(movieId)
            //.then(data => console.log(data.data.cast))
            //.then (data => console.log(data.data.cast))
            .then(data => setCastValue(data.data.cast))
        }
    }, [castValue, movieId]);

    return (
        castValue && (
            <ul>
            {castValue.map(actor => (
                <li key={actor.id} >
                <img src={actor.profile_path
                        ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                        : 'https://via.placeholder.com/180x250'
                    }
                    alt={actor.name}
                    width={200}
                    height={300}
                ></img>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
                </li>
            ))}
            </ul>
        )
    );
}
export default Cast;
