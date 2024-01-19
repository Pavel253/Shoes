import React from 'react';

const Gender = ({ categories, activeGender, handleGenderChange }) => {
  return (
    <div className="categories">
      <h5 className="title__h5">Gender</h5>
      <div className="categories__gender">
        {categories.map((gender) => (
          <button className={activeGender === gender ? 'btn__gender active' : 'btn__gender'} key={gender} onClick={() => handleGenderChange(gender)}>
            {gender}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gender;