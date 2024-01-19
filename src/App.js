import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux';

import './App.scss'
import './Adaptive.scss'

import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header.jsx';

import AppShoes from './Component/Pages/AppShoes/AppShoes.jsx'
import ShopShoes from './Component/Pages/ShopShoes/ShopShoes.jsx'
import Shoes from './Component/Pages/PagesShoes/Shoes.jsx';

import axios from 'axios';

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

  //Фильтр товаров

  const [filteredProducts, setFilteredProducts] = useState(shoesData);
  const [currentGender, setCurrentGender] = useState("all");
  const [currentColor, setCurrentColor] = useState("all");

  const categories = ["All", "Male", "Female", "Unisex", "Children"];
  const colors = ["All colors", "Black", "White", "Green", "Blue", "Red", "Pink", "Purple", "Orange", "Yellow", "Brown", "Gray"];

  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState('')

  const [activeGender, setActiveGender] = useState('all')

  const handleClick = (index) => {
    setActiveGender(index)
  }

  const handleGenderChange = (index) => {
    setCurrentGender(index);
    setCurrentColor(index)

    if (index === "All") {
      setFilteredProducts(shoesData);
    }
    if (index === "Male") {
      const filtered = shoesData.filter((product) => product.gender === 1);
      setFilteredProducts(filtered);
    } else if (currentColor) {
      return shoesData.colors === currentColor();
    }
    if (index === "Female") {
      const filtered = shoesData.filter((product) => product.gender === 2);
      setFilteredProducts(filtered);
    }
    if (index === "Unisex") {
      const filtered = shoesData.filter((product) => product.gender === 3);
      setFilteredProducts(filtered);
    }
    if (index === "Children") {
      const filtered = shoesData.filter((product) => product.gender === 4);
      setFilteredProducts(filtered);
    }

    // if (index === "All colors") {
    //   setFilteredProducts(shoesData);Air Jordan 4 Retro Ltning (Premium Batch)
    // if (index === "Blue") {
    //   const filtered = shoesData.filter((product) => product.color === 4);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Red") {
    //   const filtered = shoesData.filter((product) => product.color === 5);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Pink") {
    //   const filtered = shoesData.filter((product) => product.color === 6);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Purple") {
    //   const filtered = shoesData.filter((product) => product.color === 7);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Orange") {
    //   const filtered = shoesData.filter((product) => product.color === 8);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Yellow") {
    //   const filtered = shoesData.filter((product) => product.color === 9);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Brown") {
    //   const filtered = shoesData.filter((product) => product.color === 10);
    //   setFilteredProducts(filtered);
    // }
    // if (index === "Gray") {
    //   const filtered = shoesData.filter((product) => product.color === 11);
    //   setFilteredProducts(filtered);
    // }

  };
  // const handleGenderChange = shoesData.filter((product) => {

  //   if (currentGender && currentColor) {
  //     return product.color === currentGender && product.size === currentColor;
  //   } else if (currentGender) {
  //     return product.color === currentColor;
  //   } else if (currentGender) {
  //     return product.size === currentColor;
  //   } else {
  //     return true;
  //   }
  // });

  const handleSearch = (searchValue) => {
    const filtered = shoesData.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header
            value={value}
            setValue={setValue}
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onSearch={handleSearch} 
            filteredProducts={filteredProducts}
            onChangeGender={handleGenderChange}
            setFilteredProducts={setFilteredProducts}
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
                filteredProducts={filteredProducts}
                categories={categories}
                colors={colors}
                onChangeGender={handleGenderChange}
                shoesData={shoesData}
                setItem={setItem}
                item={item}
                activeGender={activeGender}
                handleClick={handleClick}
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
