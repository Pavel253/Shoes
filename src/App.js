import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/index.js';

import './App.scss'
import './Adaptive.scss'

import Footer from './Component/Footer/Footer.jsx';
import Header from './Component/Header/Header.jsx';

import AppShoes from './Component/Pages/AppShoes/AppShoes.jsx'
import ShopShoes from './Component/Pages/ShopShoes/ShopShoes.jsx'
import Shoes from './Component/Pages/PagesShoes/Shoes.jsx';

import axios from 'axios';

import MakingOrder from './Component/Pages/MakingOrder/MakingOrder.jsx';
import AppUser from './Component/Pages/AppUser/AppUser.jsx';
import OurService from './Component/Pages/Subpages/OurService/OurService.jsx';
import ContantUs from './Component/Pages/Subpages/ContantUs/ContantUs.jsx';
import OurEnterprise from './Component/Pages/Subpages/OurEnterprise/OurEnterprise.jsx';
import PagesNews from './Component/Pages/PagesNews/PagesNews.jsx';
import Page from './Component/Pages/PagesNews/Page/Page.jsx';
import NeedHelp from './Component/Pages/Subpages/NeedHelp/NeedHelp.jsx';


function App() {
  //Новости

  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/news/`)
      .then(response => {
        setNewsData(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  //Товары

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


  //Фильтр товаров

  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState('')

  const [filters, setFilters] = useState({});

  const [genderFilter, setGenderFilter] = useState('All');
  const [colorFilter, setColorFilter] = useState('All');

  const [sizeFilter, setSizeFilter] = useState('All');

  const [priceFilterMax, setPriceFilterMax] = useState('');
  const [priceFilterMin, setPriceFilterMin] = useState('');


  // Фильтр по категориям
  const filteredProducts = shoesData.filter(product => {

    return (
      (!value || product.title.toLowerCase().includes(value.toLowerCase())) &&
      (!searchValue || product.title.toLowerCase().includes(searchValue.toLowerCase())) &&
      (genderFilter === 'All' || product.gender === genderFilter) &&
      (colorFilter === 'All' || product.color === colorFilter || product.color1 === colorFilter) &&
      (sizeFilter === 'All' || (product.size === sizeFilter & product.quantity > 0)) &&

      (!priceFilterMin || Number(product.price) >= priceFilterMin) &&
      (!priceFilterMax || Number(product.price) <= priceFilterMax)
    );
  });


  // Фильтр по поиску
  const handleSearch = (searchValue) => {
    const filtered = shoesData.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilters(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            value={value}
            setValue={setValue}
            onSearch={handleSearch}
            filters={filters}
            setFilters={setFilters}
            setGenderFilter={setGenderFilter}
            filteredProducts={filteredProducts}
          />
          <Routes>

            <Route exact path='/' element={
              <AppShoes
                shoesData={shoesData}
                item={item}
                setItem={setItem}
                shoes={shoesData}

              />} />

            <Route exact path='/shop-shoes' element={
              <ShopShoes
                onFilterChange={handleFilterChange}
                shoesData={shoesData}
                item={item}
                setItem={setItem}
                shoes={shoesData}
                filters={filters}
                filteredProducts={filteredProducts}
              
                genderFilter={genderFilter}
                colorFilter={colorFilter}
                sizeFilter={sizeFilter}
                priceFilterMax={priceFilterMax}
                priceFilterMin={priceFilterMin}

                setGenderFilter={setGenderFilter}
                setColorFilter={setColorFilter}
                setSizeFilter={setSizeFilter}
                setPriceFilterMax={setPriceFilterMax}
                setPriceFilterMin={setPriceFilterMin}
                itemsPerPage={15}
              />} />

            <Route exact path='/:id' element={<Shoes shoesData={shoesData} />} />
            <Route exact path='/making-order' element={<MakingOrder shoes={shoesData} />} />
            
            <Route exact path='/user' element={
              <AppUser
                
              />} />

            <Route exact path='/news' element={<PagesNews newsData={newsData} />} />
            <Route exact path='/news/1' element={<Page newsData={newsData} />} />


            {/* footer link  */}

            <Route exact path='/our&service' element={<OurService />} />
            <Route exact path='/contant&us' element={<ContantUs />} />
            <Route exact path='/our&enterprise' element={<OurEnterprise newsData={newsData} />} />
            <Route exact path='/you&help' element={<NeedHelp newsData={newsData} />} />

          </Routes>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
