import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
    console.log(props.articles)

    console.log(props.selected)
    const localArticles = props.selected.map(article => {
        return(
            <NewsArticle key={article.headline} headline={article.headline} img={article.img} description={article.description} url={article.url}
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