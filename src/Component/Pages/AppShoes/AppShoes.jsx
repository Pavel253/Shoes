import React from "react";

import { motion } from "framer-motion";

import BestPeople from "../../Section/BestPeople/BestPeople.jsx";
import BestSellers from "../../Section/BestSellers/BestSellers.jsx";
import Handiwork from "../../Section/Handiwork/Handiwork.jsx";
import LogoSection from "../../Section/LogoSection/LogoSection.jsx";
import ModernShoes from "../../Section/ModernShoes/ModernShoes.jsx";
import NikeClub from "../../Section/NikeClub/NikeClub.jsx";
import Shoes from "../../Section/Shoes/Shoes.jsx";
import Visionaries from "../../Section/Visionaries/Visionaries.jsx";
import Warranty from "../../Section/Warranty/Warranty.jsx";
import SportTime from "../../Section/SportTime/SportTime.jsx";
import FavoriteNike from "../../Section/FavoriteNike/FavoriteNike.jsx";

const AppShoes = ({ shoesData, item, setItem }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Shoes shoesData={shoesData} />
      <Handiwork />
      <BestSellers />
      <SportTime
        item={item}
        setItem={setItem}
        shoesData={shoesData}

      />
      <ModernShoes />
      <FavoriteNike item={item} setItem={setItem} shoesData={shoesData} />
      <LogoSection />
      <BestPeople />
      <Visionaries />
      <NikeClub />
      <Warranty />
    </motion.main>
  );
};

export default AppShoes;
