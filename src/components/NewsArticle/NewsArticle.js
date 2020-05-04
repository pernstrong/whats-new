import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, headline, img, description, url}) => {
    return(
        <article>
            <h3>{headline}</h3>
            <img src={img} alt='news article'/>
            <p>{description}</p>
            <a href={url}>Link to article</a>
        </article>
    )
}

export default NewsArticle;