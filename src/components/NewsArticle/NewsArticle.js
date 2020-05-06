import React from 'react';
import PropTypes from 'prop-types'
import './NewsArticle.css';

const NewsArticle = ({id, headline, img, description, url}) => {
    return(
        // do we need the data-id attribute???
        <article data-id={id}>
            <h3>{headline}</h3>
            <img src={img} alt='news article'/>
            <p>{description}</p>
            <a href={url}>Link to article</a>
        </article>
    )
}

export default NewsArticle;

NewsArticle.propTypes = {
    id: PropTypes.number,
    headline: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
}