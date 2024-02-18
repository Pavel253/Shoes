import React from 'react';

import './PagesNews.scss'
import Card from './Card/Card.jsx';
import { Link } from 'react-router-dom';

const PagesNews = ({ newsData }) => {
  return (
    <main className='pages__news'>
      <div className="container">
        <Link to='/our&enterprise' className='btn btn__news'>Back</Link>
        <h2 className='title__h2'>Press and news</h2>
        <div className="container__news">
          {newsData.map((data) => {
            return (
              <Card data={data} />
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default PagesNews;