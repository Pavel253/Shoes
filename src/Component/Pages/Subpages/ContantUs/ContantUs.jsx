import React from 'react';

import FindStore from './ FindStore';
import { motion } from "framer-motion";

import './ContantUs.scss'

const ContantUs = () => {
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='contant__us'
  >
    <div className="container">
        <FindStore />
        <section className='section__subpages contant'>
          <div className="subpages">
            <h2 className='title__h2'>Contact Us</h2>\
            <ul>
              <li className='contants'>Faceboot</li>
              <li className='contants'>Twiter(X)</li>
              <li className='contants'>Instagram</li>
              <li className='contants'>Nike@gmail.com</li>
              <li className='contants'>+7 (916) 776-76-76</li>
            </ul>
          </div>
          <div className="terms__conditions">
            <h2 className='title__h2'>Terms & Conditions</h2>\
            <ul>
              <li className='text'>Sneakers are designed for use in everyday wear, as well as for sports and physical exercises.</li>
              <li className='text'>Sneakers should be used only in accordance with their intended purpose. They should not be used for other purposes, such as walking on rough surfaces or doing extreme sports.</li>
              <li className='text'>When choosing sneakers, you should pay attention to the correct size and fit on the foot. Incorrectly selected sneakers can lead to discomfort and injury.</li>
              <li className='text'>When playing sports in sneakers, it is necessary to monitor the condition of the sole and cushioning. Worn sneakers can lose their properties and cause injury.</li>
              <li className='text'>Sneakers should be stored in a dry and cool place, protected from direct sunlight and moisture. It is also recommended to regularly clean the sneakers from dirt and dust.</li>
              <li className='text'>If any defects or damage to the sneakers are found, contact the seller or manufacturer for advice or replacement of the product.</li>
              <li className='text'>The use of sneakers in conditions that are not intended for them can lead to their rapid wear and loss of properties. Therefore, it is recommended to follow the rules and conditions of use of sneakers.</li>
            </ul>
          </div>
        </section>
      </div>
  </motion.main>
  );
};

export default ContantUs;