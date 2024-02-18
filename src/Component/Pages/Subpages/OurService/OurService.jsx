import React from 'react';

import CustomizeProduct from './CustomizeProduct';
import GiftCard from './GiftCard';
import MaintainRepair from './MaintainRepair';

import { motion } from "framer-motion";

import './OurService.scss'

const OurService = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CustomizeProduct />
      <GiftCard />
      <MaintainRepair />
    </motion.main>
  );
};

export default OurService;