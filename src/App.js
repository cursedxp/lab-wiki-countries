import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Data from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(Data);

  return (
    <div className="App">
      <Navbar />
      {/* <!-- Bootstrap container wrapper div --> */}
      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}

        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path=":alpha3Code"
              element={<CountryDetails data={Data} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
