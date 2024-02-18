import React from 'react';
import { motion } from "framer-motion";
import WhoMe from './WhoMe';

import './OurEnterprise.scss'
import OurAlliance from './OurAlliance';
import PressNews from './PressNews';

const OurEnterprise = ({newsData}) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='our__enterprise'
    >
      <div className="container">
        <WhoMe />
        <PressNews newsData={newsData} />
        <OurAlliance />
      </div>
    </motion.main>
  );
};

export default OurEnterprise;