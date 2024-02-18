import React from 'react';
import Card from './Card/Card.jsx';
import './Card/Card.scss'
import { Link } from 'react-router-dom';

const PressNews = ({newsData}) => {

  return (
    <section className='press__news'>
      <h2 className='title__h2'>Press and news</h2>
      {newsData.map((data) => {
        return(
          <Card data={data} />
        )
      })}
      <Link to='/news' className='btn btn__news'>All the news</Link>
    </section>
  );
};

export default PressNews;