import "../scss/main/country.scss";

function Country({ item }) {
  return (
    <div className="country__card">
      <p className="country__flag">{item.flag}</p>
      <h4 className="country__title">{item.name.official}</h4>
      <p className="country__p">{item.capital[0]}</p>
      <p className="country__p">{item.continents[0]}</p>
    </div>
  );
}

export default Country;
