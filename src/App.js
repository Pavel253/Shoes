import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux';

import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header.jsx';

import AppShoes from './Component/Pages/AppShoes/AppShoes.jsx'
import ShopShoes from './Component/Pages/ShopShoes/ShopShoes.jsx'
import Shoes from './Component/Pages/PagesShoes/Shoes.jsx';

import axios from 'axios';

import './App.scss'
import './Adaptive.scss'
import MakingOrder from './Component/Pages/MakingOrder/MakingOrder.jsx';


function App() {

  const [shoesData, setShoesData] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/shoes/`)
      .then(response => {
        setShoesData(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  const [item, setItem] = useState('')

  //Фильтр поисковика
  const [value, setValue] = useState('')

  const filteredCountries = shoesData.filter(shoes => {
    return shoes.title.toLowerCase().includes(value.toLowerCase())
  })

  //Фильтр товаров

  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const filter_cat = (itemData) => {
    const filterData = shoesData.filter((item) => item.cat === itemData);
    setData(filterData);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} value={value} filteredCountries={filteredCountries} setValue={setValue} shoes={shoesData} />
          <Routes>

            <Route exact path='/' element={<AppShoes shoesData={shoesData} item={item}
              setItem={setItem} />} />

            <Route exact path='/shop-shoes' element={
              <ShopShoes
                data={data}
                setData={setData}
                collection={collection}
                setCollection={setCollection}
                filter_cat={filter_cat}
                value={value}
                shoesData={shoesData}
                filteredCountries={filteredCountries}
                setItem={setItem}
                item={item}
                isOpen={isOpen}
              />} />
            <Route exact path='/:cat' element={
              <ShopShoes
                data={data}
                setData={setData}
                collection={collection}
                setCollection={setCollection}
                filter_cat={filter_cat}
                value={value}
                shoesData={shoesData}
                filteredCountries={filteredCountries}
                setItem={setItem}
                item={item}
                isOpen={isOpen}
              />} />

            <Route exact path='/:title' element={<Shoes shoesData={shoesData} />} />
            <Route exact path='/making-order' element={<MakingOrder shoes={shoesData} />} />

          </Routes>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
