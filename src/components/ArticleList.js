import React from 'react';
import Moment from 'react-moment';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h2>Daftar Artikel</h2>
      <div>
        {articles.map((article) => (
          <div className='card p-2 mb-4' key={article._id}>
            <h5>{article.abstract}</h5>
            <p>{article.byline.original}</p>
            <Moment format='ll'>{article.pub_date}</Moment>
            <p>{article.lead_paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
