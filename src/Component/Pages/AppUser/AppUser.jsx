import React from 'react';

import { motion } from "framer-motion";

import './AppUser.scss'

const AppUser = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    <main className='container'>
      <div className="main__header">
        <button></button>
        <h1 className='h1'>My Data</h1>
        <div className="user__data">
          <form className="block__user name__user">
            <div className='form__container'>
              <input className='input input__name' type="text" placeholder='Last name ' />
              <input className='input input__name' type="text" placeholder='First name' />
              <input className='input input__tel' type="tel" placeholder='Phone' />
              <input className='input input__email' type="email" placeholder='Email' />
            </div>
            <button className='btn'>Change</button>
          </form>
          <form className="block__user map__user">
            <div className='form__container'>
              <input className='input input__name' type="text" placeholder='Last name ' />
              <input className='input input__name' type="text" placeholder='First name' />
              <input className='input input__tel' type="tel" placeholder='Phone' />
              <input className='input input__email' type="email" placeholder='Email' />
            </div>
            <button className='btn'>Change</button>
          </form>
        </div>
      </div>
    </main>

    </motion.div >
  );
};

export default AppUser;