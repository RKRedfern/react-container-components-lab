// Code MovieReviews Here
import React from 'react'

const Review = ({
    headline, 
    byline, 
    link,
    summary_short
}) => {
    return (
    <div
        key={headline}
        className="review"
        >
        <header>
            <a
            className="review-link"
            href={link.url}
            >
            {headline}
            </a>
            <br/>
            <span className="author">{byline}</span>
        </header>
        <blockquote>{summary_short}</blockquote>
    </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list"> {reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;

//This component serves as the presentation component that is responsible for displaying a list of movie reviews on a page.
//The two other Container components will be responsible for wrapping this component and displaying it. 
//This component should be stateless and functional
