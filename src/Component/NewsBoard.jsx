import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';


const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const apiKey = "YOUR API KEY ADD HERE";
  

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        {articles.map((news, index) => (
          <NewsItem key={index} 
           title={news.title}
           description={news.description}
           src={news.urlToImage}
           url={news.url} />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;


















