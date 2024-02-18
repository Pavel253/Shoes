import React from 'react';

import card from '../../../../Img/Subpages/card.png'

import img from '../../../../Img/Subpages/зз.jpg'

const MaintainRepair = () => {

  return (
    <section className='section__services'>
      <div className="container">
        <div className="maintain__repair">
          <div className="container__img">
            <img style={{ width: "500px", height: '300px' }} src={img} className='img' alt="" />
          </div>
          <div className="form__text">
            <h6 className='title__h6' style={{width: '450px'}}>When activating the discount card, you get:</h6>
            <ul>
              <li>A $ 10 discount on purchases with an activated card for 1 day</li>
              <li><hr /></li>
              <li>Cashback when buying any product</li>
              <li><hr /></li>
              <li>You are on our team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintainRepair;