import "../scss/App.scss";
import dataCountries from "../services/data.json";
import ListCountries from "./ListCountries";
import Filter from "./Filter";
import { useState } from "react";
import AddCountry from "./AddCountry";

function App() {
  const [inputCountry, setInputCountry] = useState("");
  const [inputContinent, setInputContinent] = useState("value1");
  const [countries, setCountriesData] = useState(dataCountries);

  const [nameNewCountry, setNameNewCountry] = useState("");
  const [capitalNewCountry, setCapitalNewCountry] = useState("");
  const [flagNewCountry, setFlagNewCountry] = useState("");
  const [continentNewCountry, setContinentNewCountry] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newCountry = {
      name: { official: nameNewCountry },
      capital: [capitalNewCountry],
      flag: flagNewCountry,
      continents: [continentNewCountry],
    };
    setCountriesData([...countries, newCountry]);
  };

  const handleAddCountry = (value) => {
    setNameNewCountry(value);
  };

  const handleAddCapital = (value) => {
    setCapitalNewCountry(value);
  };

  const handleAddFlag = (value) => {
    setFlagNewCountry(value);
  };

  const handleAddContinent = (value) => {
    setContinentNewCountry(value);
  };

  //FILTRAR
  const handleFilterCountry = (valueInput) => {
    setInputCountry(valueInput);
  };

  const handleFilterContinent = (valueSelect) => {
    setInputContinent(valueSelect);
  };

  const getContinentName = (value) => {
    switch (value) {
      case "value2":
        return "Africa";
      case "value3":
        return "North America";
      case "value4":
        return "South America";
      case "value5":
        return "Asia";
      case "value6":
        return "Europe";
      case "value7":
        return "Oceania";
      default:
        return "All";
    }
  };

  const filteredCountries = countries.filter((country) => {
    const matchesCountry = country.name.official
      .toLowerCase()
      .includes(inputCountry.toLowerCase());
    const matchesContinent =
      inputContinent === "value1" ||
      country.continents[0] === getContinentName(inputContinent);
    return matchesCountry && matchesContinent;
  });

  return (
    <>
      <header className="app__header">
        <h2 className="app__title">Country Info App</h2>
        <div className="app__div">
          <h4 className="app__subtitle">
            Explore Information about countries, capitals and flags.
          </h4>
          <h4 className="app__subtitle">
            Add new countries and filter through the list!
          </h4>
        </div>
      </header>
      <main className="app__main">
        <section className="app__section">
          <Filter
            onChangeInput={handleFilterCountry}
            onChangeSelect={handleFilterContinent}
          />
          <AddCountry
            onChangeNameCountry={handleAddCountry}
            onChangeNameCapital={handleAddCapital}
            onChangeFlag={handleAddFlag}
            onChangeContinent={handleAddContinent}
            handleSubmit={handleSubmit}
          />
        </section>
        <div>
          <ListCountries countriesData={filteredCountries} />
        </div>
      </main>
    </>
  );
}

export default App;
