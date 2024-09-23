import "../scss/main/Filter.scss";

function Filter({ onChangeInput, onChangeSelect }) {
  const handleFilterCountry = (ev) => {
    onChangeInput(ev.target.value);
  };

  const handleFilterContinent = (ev) => {
    onChangeSelect(ev.target.value);
  };

  return (
    <div className="Filters">
      <h4 className="Filters__header">Filters</h4>
      <form action="" className="Filters__form">
        <label htmlFor="country" className="Filters__label">
          By Country
        </label>
        <input
          type="text"
          placeholder="Spain..."
          id="country"
          onChange={handleFilterCountry}
          className="Filters__input__country"
        />

        <label htmlFor="continent" className="Filters__label">
          By Continent
        </label>
        <select
          name="continent"
          id="continent"
          onChange={handleFilterContinent}
          className="Filters__input__continent"
        >
          <option value="value1">All</option>
          <option value="value2">Africa</option>
          <option value="value3">North America</option>
          <option value="value4">South America</option>
          <option value="value5">Asia</option>
          <option value="value6">Europe</option>
          <option value="value7">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
