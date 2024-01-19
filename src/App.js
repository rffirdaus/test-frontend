import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const API_KEY = 'ukz2wfASKg4a0Ml3OkyJAS1YeM2bFpJF';
const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const App = () => {
  const [articles, setArticles] = useState([]);

  const searchArticles = async (query) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          'api-key': API_KEY,
        },
      });
      console.log(response, 'masuk')
      setArticles(response.data.response.docs);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    searchArticles()
  },[])

  return (
    <div className='container'>
      <h1 className='text-center'>Aplikasi Pencarian Artikel NY Times</h1>
      <SearchBar onSearch={searchArticles} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
