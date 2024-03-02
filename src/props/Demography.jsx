import React from 'react'

const Demography = ({ info }) => {
    const { name, age, city, country } = info;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
        <h4>{country}</h4>
      </div>
    );
}

export default Demography