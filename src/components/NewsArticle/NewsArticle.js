import React from 'react';
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