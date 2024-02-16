import React, { useState } from 'react';
import BtnCheckbox from './BtnsSize';
import BtnColors from './BtnsColor';

const Filter = ({ priceMax, priceMin, setGenderFilter, setColorFilter, setSizeFilter, setPriceFilterMax, setPriceFilterMin, currentProducts, colorFilter, btnOnClick }) => {

  const [activeGender, setActiveGender] = useState(false)
  const [activeGenderMale, setActiveGenderMale] = useState(false)
  const [activeGenderFemale, setActiveGenderFemale] = useState(false)
  const [activeGenderChildren, setActiveGenderChildren] = useState(false)

  const [activeSizeBtn, setActiveSizeBtn] = useState(false)

  const color = [{ id: 1, color: "Black" }, { id: 2, color: "White" }, { id: 3, color: "Red" }, { id: 4, color: "Purple" }, { id: 5, color: "Pink" }, { id: 6, color: "Yellow" }, { id: 7, color: "Blue" }, { id: 8, color: "Green" }, { id: 9, color: "Orange" }]

  const data__size = [{ id: 1, size: '46' }, { id: 2, size: '45' }, { id: 3, size: '44' }, { id: 4, size: '43' }, { id: 5, size: '42' }, { id: 6, size: '41' }, { id: 7, size: '40' }, { id: 8, size: '39' }, { id: 9, size: '38' }, { id: 10, size: '37' }, { id: 11, size: '36' }, { id: 12, size: '35' }, { id: 13, size: '34' }, { id: 14, size: '33' }, { id: 15, size: '32' }, { id: 16, size: '31' }, { id: 17, size: '30' }, { id: 18, size: '29' },];

  const clickFilterOne = () => {
    setGenderFilter('All')
    setActiveGender(!activeGender)
    setActiveGenderMale(false)
    setActiveGenderFemale(false)
    setActiveGenderChildren(false)
  }
  const clickFilterTwo = () => {
    setGenderFilter(1)
    setActiveGenderMale(!activeGenderMale)
    setActiveGender(false)
  }
  const clickFilterThree = () => {
    setGenderFilter(2)
    setActiveGenderFemale(!activeGenderFemale)
    setActiveGender(false)
  }
  const clickFilterFour = () => {
    setGenderFilter(3)
    setActiveGenderChildren(!activeGenderChildren)
    setActiveGender(false)
  }

  const [activeSize, setActiveSize] = useState(null)
  const handleSizeClick = (blockId) => {
    setActiveSize(blockId);
    setSizeFilter('All')
  };

  const [activeColor, setActiveColor] = useState(null)
  const handleColorClick = (blockId) => {
    setActiveColor(blockId);
    setColorFilter("All")
  };

  return (
    <div className='categories'>
      <h5 className='title__h5'>Gender</h5>

      <div className="categories__filter categories__gender">
        <button className={activeGender ? 'btn__gender active' : 'btn__gender'} onClick={() => clickFilterOne()}>All</button>
        <button className={activeGenderMale ? 'btn__gender active' : 'btn__gender'} onClick={() => clickFilterTwo()}>Male</button>
        <button className={activeGenderFemale ? 'btn__gender active' : 'btn__gender'} onClick={() => clickFilterThree()}>Female</button>
        <button className={activeGenderChildren ? 'btn__gender active' : 'btn__gender'} onClick={() => clickFilterFour()}>Unisex</button>
      </div>

      <h5 className='title__h5'>Color</h5>
      <div className="categories__filter categories__color">

        <div className="btn__checkbox">
          <button className={activeColor === color.id ? "checkbox active" : "checkbox"} onClick={() => handleColorClick()}>
            <div className='gal' />
            <div className='gal' />
          </button>
          <span className='span'>All</span>
        </div>

        {color.map((data) => {
          return <BtnColors 
            activeColor={activeColor} 
            setActiveColor={setActiveColor} 
            setColorFilter={setColorFilter}          

            data={data} 
            key={data.id}
            />
        })}
      </div>

      <h5 className='title__h5'>Size</h5>

      <div className={activeSizeBtn ? "categories__filter categories__size active" : "categories__filter categories__size"}>

        <div className="btn__checkbox">
          <button className={activeSize === data__size.id ? "checkbox active" : "checkbox"} onClick={() => handleSizeClick()}>
            <div className='gal' />
            <div className='gal' />
          </button>
          <span className='span'>All</span>
        </div>

        {data__size.map((data) => {
          return <BtnCheckbox
            handleSizeClick={handleSizeClick}
            data={data}
            key={data.id}
            setActiveSize={setActiveSize}
            activeSize={activeSize}
            setSizeFilter={setSizeFilter} />
        })}


      </div>

      <button onClick={() => setActiveSizeBtn(!activeSizeBtn)} className='btn-size'>All size</button>

      <h5 className='title__h5'>Price</h5>

      <div className="price__filter categories__price">
          <input
            className='input'
            type="text"
            placeholder="Min price"
            value={priceMin}
            onChange={(e) => setPriceFilterMin(e.target.value)}
          />
          <input
            className='input'
            type="text"
            placeholder="Max price"
            value={priceMax}
            onChange={(e) => setPriceFilterMax(e.target.value)}
          />
      </div>

    </div>
  );
};

export default Filter;