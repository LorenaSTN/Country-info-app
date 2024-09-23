import "../scss/main/AddCountry.scss";

function AddCountry({
  onChangeNameCountry,
  onChangeNameCapital,
  onChangeFlag,
  onChangeContinent,
  handleSubmit,
}) {
  const handleNameCountry = (ev) => {
    onChangeNameCountry(ev.target.value);
  };

  const handleNameCapital = (ev) => {
    onChangeNameCapital(ev.target.value);
  };

  const handleFlag = (ev) => {
    onChangeFlag(ev.target.value);
  };

  const handleNameContinent = (ev) => {
    onChangeContinent(ev.target.value);
  };

  return (
    <div>
      <form className="add__form">
        <h4 className="add__title">Add New Country</h4>
        <input
          type="text"
          onChange={handleNameCountry}
          placeholder="Country"
          className="add__input"
        />

        <input
          type="text"
          onChange={handleNameCapital}
          placeholder="Capital"
          className="add__input"
        />

        <input
          type="text"
          id="flag"
          onChange={handleFlag}
          placeholder="Flag"
          className="add__input"
        />

        <input
          type="text"
          onChange={handleNameContinent}
          placeholder="Continent"
          className="add__input"
        />

        <button className="add__button" type="submit" onClick={handleSubmit}>
          Add Country
        </button>
      </form>
    </div>
  );
}

export default AddCountry;
