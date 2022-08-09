import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import { List } from "./components/pages/List/List";
import Country from "./components/pages/Country/Country";
import Card from "./components/Card/card";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

// console.log(country);
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    } else if (select.length) {
      fetch(`https://restcountries.com/v3.1/region/${select}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  }, [value, select]);
  return (
    <div className="App">
      <div className="container">
        <Header theme={theme} setTheme={setTheme} />

        <Hero
          theme={theme}
          setTheme={setTheme}
          data={setValue}
          setSelect={setSelect}
        />
        <country />

        <Routes>
          <Route
            path="/"
            element={
              data.length && (
                <List theme={theme} setTheme={setTheme}>
                  {data.map((e) => (
                    <Card
                      theme={theme}
                      setTheme={setTheme}
                      item={e}
                      key={e.name.official}
                    />
                  ))}
                </List>
              )
            }
          />
          <Route path="/country/:name" element={<Country theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
