import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = ({ theme }) => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <div>
      {country.map((e, i) => {
        return (
          <div key={i} className={`${theme} country__site`}>
            <img className="country__flag" src={e?.flags?.svg} />
            <div className="country">
              <h2 className="countyr__capital">{e?.name?.common}</h2>
              <div className="country__inner">
                <div>
                  <p className="country__subtitle">Native Name: {e?.capital}</p>
                  <p className="country__subtitle">
                    Population : {e?.population}
                  </p>
                  <p className="country__subtitle">Region: {e?.region} </p>
                  <p className="country__subtitle ">
                    Sub Region: {e?.subregion}
                  </p>
                  <p className="country__subtitle">Capital: {e?.capital}</p>
                </div>

                <div>
                  <p>Top Level Domain: {e?.tld}</p>
                  {/* <p>Currencies: {data.currencies}</p> */}
                  {/* <p>Languages: {data?.languages} </p> */}
                </div>
              </div>

              <div className="country__border">
                <h4>Border Countries: </h4>
                <div className="btn__borders">
                  {e?.borders?.map((elm) => (
                    <button className="country__btn" key={elm}>
                      {elm}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
