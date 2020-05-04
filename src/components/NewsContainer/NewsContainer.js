import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
    const localArticles = props.local.map(article => {
        return(
            <NewsArticle key={article.id} headline={article.headline} img={article.img} description={article.description} url={article.url}
            />
        )
    })
    return(
        <section className='news-container'>
            {localArticles}
        </section>
    )
}

export default NewsContainer;