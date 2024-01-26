import React from 'react'
import './article.css'
const Article = ({ urlImage, date, text, id }) => {
  return (
    <div className="gpt3__blog-container_article" id={id}>
      <div className="gpt3__blog-container_article-image">
        <img src={urlImage} alt="img" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
