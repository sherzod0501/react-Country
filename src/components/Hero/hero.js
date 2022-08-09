import "./hero.css";

const Hero = ({ data, setSelect, theme }) => {
  return (
    <div className={theme}>
      <input
        onChange={(evt) => data(evt.target.value)}
        className="hero-input"
        type="search"
        placeholder="Search for a country…"
      />

      <select
        onChange={(evt) => setSelect(evt.target.value)}
        className="hero-select"
        defaultValue=""
      >
        <option disabled value="" className="hero-option">
          Choose
        </option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
      </select>
    </div>
  );
};

export default Hero;
