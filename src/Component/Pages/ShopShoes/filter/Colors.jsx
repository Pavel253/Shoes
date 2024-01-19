import React from 'react';

const Colors = ({ colors, activeGender, handleGenderChange }) => {
  return (
    <div className="categories">
      <h5 className="title__h5">Colors</h5>
      <div className="categories__color">
        {colors.map((colors) => (
          <button className={activeGender === colors ? 'btn__gender active' : 'btn__gender'} key={colors} onClick={() => handleGenderChange(colors)}>
            {colors}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Colors;