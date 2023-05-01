import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getReviews} from "../services/search"

const Reviews = () => {

const [reviewsValue, setReviewsValue] = useState(null);
const { movieId } = useParams();


useEffect(() => {
    if(reviewsValue === null) {
        getReviews(movieId)
        .then(data => {
            if (data.data.results.length !==0)
            setReviewsValue(data.data.results)
        })
    }
}, [reviewsValue, movieId]);

return (
    <>
    {reviewsValue ? (reviewsValue.map(review =>(
            <ul>
                <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
                </li>
            </ul>
        ) )
    )
    :(<p>We don`t have any reviews for this movie</p>)
    }
    </>
)
}

export default Reviews;