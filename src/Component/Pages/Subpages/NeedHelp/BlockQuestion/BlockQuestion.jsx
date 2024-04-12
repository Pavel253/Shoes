import React, { useState } from 'react';

import './BlockQuestion.scss'

const BlockQuestion = () => {

  const [activeOne, setActiveOne] = useState(false)
  const [activeTwo, setActiveTwo] = useState(false)
  const [activeThree, setActiveThree] = useState(false)
  const [activeFour, setActiveFour] = useState(false)
  const [activeFive, setActiveFive] = useState(false)

  const oneClick = () => {
    setActiveOne(true)
    setActiveTwo(false)
    setActiveThree(false)
    setActiveFour(false)
    setActiveFive(false)
  }
  const twoClick = () => {
    setActiveOne(false)
    setActiveTwo(true)
    setActiveThree(false)
    setActiveFour(false)
    setActiveFive(false)
  }
  const threeClick = () => {
    setActiveOne(false)
    setActiveTwo(false)
    setActiveThree(true)
    setActiveFour(false)
    setActiveFive(false)
  }
  const fourClick = () => {
    setActiveOne(false)
    setActiveTwo(false)
    setActiveThree(false)
    setActiveFour(true)
    setActiveFive(false)
  }
  const fiveClick = () => {
    setActiveOne(false)
    setActiveTwo(false)
    setActiveThree(false)
    setActiveFour(false)
    setActiveFive(true)
  }
  return (
    <div className='select__question'>
      <span onClick={() => oneClick()} className={activeOne ? 'question active' : 'question'}>What are the terms of delivery of goods from the Nike online store?

        <svg class="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="white"></path></svg>

      </span>
      <span className={activeOne ? "question__active active" : "question__active"}>
        Standard Delivery: Usually takes 3 to 5 business days. <hr />
        Express delivery: a faster method, which may take from 1 to 3 business days.
      </span>

      <span className={activeTwo ? 'question active' : 'question'} onClick={() => twoClick()}>What payment methods does the Nike online store accept?

        <svg class="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="white"></path></svg>

      </span>
      <span className={activeTwo ? "question__active active" : 'question__active'}>
        Only online by visa and mastercard
      </span>

      <span className={activeThree ? 'question active' : 'question'} onClick={() => threeClick()}>What is the quality of the products in the Nike online store?

        <svg class="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="white"></path></svg>

      </span>
      <span className={activeThree ? "question__active active" : 'question__active'}>
        Great! A huge number of people prefer us and thanks to them we do wonders!
      </span>

      <span className={activeFour ? "question active" : 'question'} onClick={() => fourClick()}>What is the delivery time for an order in the Nike online store?

        <svg class="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="white"></path></svg>

      </span>
      <span className={activeFour ? "question__active active" : 'question__active'}>
        Standard Delivery: 3 to 5 business days. <hr />
        Express delivery: from 1 to 3 business days.
      </span>

      <span className={activeFive ? "question active" : 'question'} onClick={() => fiveClick()}>How do I contact representatives of the Nike online store in case of problems with the order?

        <svg class="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="white"></path></svg>

      </span>
      <span className={activeFive ? "question__active active" : 'question__active'}>
        Call +79999996666 or write in telegram
      </span>
    </div>
  );
};

export default BlockQuestion;