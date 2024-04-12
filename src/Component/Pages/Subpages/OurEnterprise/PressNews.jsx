import React from 'react';
import Card from './Card/Card.jsx';
import './Card/Card.scss'
import { useNavigate } from "react-router-dom";

const PressNews = ({newsData}) => {

  const history = useNavigate()

  const handleClickPages = () => {
    window.scrollTo(0, 0); 
    history(`/news`);
  };

  return (
    <section className='press__news'>
      <h2 className='title__h2'>Press and news</h2>
      {newsData.map((data) => {
        return(
          <Card data={data} key={data.id} />
        )
      })}
      <button onClick={handleClickPages} className='btn btn__news'>All the news</button>
    </section>
  );
};

export default PressNews;