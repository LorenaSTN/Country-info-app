import Country from "./Country";
import "../scss/main/ListOfCountries.scss";

function ListCountries({ countriesData }) {
  return (
    <div className="listofcountries">
      {countriesData.map((countryData) => {
        return <Country key={countryData.name.official} item={countryData} />;
      })}
    </div>
  );
}

export default ListCountries;
