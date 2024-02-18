import React from 'react';

import card from '../../../../Img/Subpages/card.png'


const GiftCard = () => {

  return (
    <div className='section__services'>
      <div className="container">
        <div className="gift__card">
          <div className="form__text">
            <h6 className='title__h6'>When activating the discount card, you get:</h6>
            <ul>
              <li>A $ 10 discount on purchases with an activated card for 1 day</li>
              <li><hr /></li>
              <li>Cashback when buying any product</li>
              <li><hr /></li>
              <li>You are on our team</li>
            </ul>
          </div>
          <div className="container__img">
            <img style={{ width: "400px", height: '250px' }} src={card} className='img' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;