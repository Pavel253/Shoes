import React, { useEffect, useState } from 'react';
import './App.scss'
import './Adaptive.scss'

import FavoriteNike from './Component/FavoriteNike/FavoriteNike';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header.jsx';
import BestPeople from './Component/Section/BestPeople/BestPeople';
import BestSellers from './Component/Section/BestSellers/BestSellers';
import Handiwork from './Component/Section/Handiwork/Handiwork';
import LogoSection from './Component/Section/LogoSection/LogoSection';
import ModernShoes from './Component/Section/ModernShoes/ModernShoes';
import NikeClub from './Component/Section/NikeClub/NikeClub';
import Shoes from './Component/Section/Shoes/Shoes.jsx'
import Visionaries from './Component/Section/Visionaries/Visionaries';
import Warranty from './Component/Section/Warranty/Warranty';
import axios from 'axios';
import SportTime from './Component/Section/SportTime/SportTime';

function App() {

  const [shoesData, setShoesData] = useState([])
    
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/shoes/`)
  .then(response => {
    setShoesData(response.data)
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  }, [])

  const [item, setItem] = useState('')


  return (
    <div className="App">
      <Header />
      <Shoes shoesData={shoesData} />
      <Handiwork />
      <BestSellers />
      <SportTime item={item} setItem={setItem} shoesData={shoesData} />
      <ModernShoes />
      <FavoriteNike item={item} setItem={setItem} shoesData={shoesData} />
      <LogoSection />
      <BestPeople />
      <Visionaries />
      <NikeClub />
      <Warranty />
      <Footer />
    </div>
  );
}

export default App;
