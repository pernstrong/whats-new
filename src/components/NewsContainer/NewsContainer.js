import React from 'react';
import PropTypes from 'prop-types'
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {

    const articles = props.selected.map(article => {
        return(
            <NewsArticle 
            key={article.headline} 
            {...article}
            />
        )
    })

    const noArticlesMessage = () => {
       return !props.selected.length && (
            <div>
                <h2>No articles match your search...</h2>
                <button onClick={props.refresh}>Back to All Articles</button>
            </div>
        )
    } 

    return(
        <section className='news-container'>
            {articles}
            {noArticlesMessage()}
        </section>
    )
}

export default NewsContainer;

NewsContainer.propTypes = {
    selected: PropTypes.array
}