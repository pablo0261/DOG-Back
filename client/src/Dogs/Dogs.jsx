import React from "react";
import "./Dogs.style.css";

const Dogs = ({
  handleOrder,
  handlerFilterW,
  handlerFilterOrigin,
  handlerFilterTemp,
  temperaments,
  handleRemoveTemperament,
  selectedTemperaments,
  resetAll,
}) => {
  return (
    <div className="DivfilterButton">
      <select className="OrderButton" onChange={(event) => handleOrder(event)}>
        <option disabled>Order by Name</option>
        <option key={1} value="A-Z">
          A-Z
        </option>
        <option key={2} value="Z-A">
          Z-A
        </option>
      </select>

      <select className="OrderButton" onChange={(e) => handlerFilterW(e)}>
        <option disabled>Order by Weight</option>
        <option key={1} value="weightMax">
          Max
        </option>
        <option key={2} value="weightMin">
          Min
        </option>
      </select>

      <select className="OrderButton" onBlur={resetAll} onChange={(e) => handlerFilterOrigin(e)}>
        <option disabled>Order by Origin</option>
        <option key={1} value="All">
          All
        </option>
        <option key={2} value="created">
          Created
        </option>
        <option key={3} value="Api">
          Api
        </option>
      </select>

      <select
        className="OrderButton"
        onChange={(e) => handlerFilterTemp(e)}
      >
        <option disabled>Temperaments</option>
        <option key={1} value="All">
          All
        </option>
        {temperaments.map((temp) => (
          <option value={temp} key={temp}>
            {temp}
          </option>
        ))}
      </select>
      <div className="SelectedTemperamentsContainer">
        {selectedTemperaments.map((temp) => (
          <div key={temp} className="SelectedTemperament">
            {temp}
            <button className="XButton" onClick={() => handleRemoveTemperament(temp)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;